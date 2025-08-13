import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    detectSessionInUrl: true,
    persistSession: true
  }
});

// Types for quiz submissions
export interface QuizSubmission {
  id?: string;
  email: string;
  archetype: string;
  answers: number[];
  created_at?: string;
}

// Function to save quiz submission (upsert - update existing or insert new)
export async function saveQuizSubmission(submission: Omit<QuizSubmission, 'id' | 'created_at'>) {
  console.log('Attempting to save quiz submission:', {
    email: submission.email,
    archetype: submission.archetype,
    answersLength: submission.answers.length
  });

  try {
    // First, verify we can connect to Supabase
    const { data: testData, error: testError } = await supabase
      .from('quiz_submissions')
      .select('id')
      .limit(1);

    if (testError) {
      console.error('Failed to connect to Supabase:', testError);
      return { 
        data: null, 
        error: new Error('Database connection failed: ' + testError.message)
      };
    }

    console.log('Successfully connected to Supabase');

    // Check if there's an existing submission for this email
    const { data: existingData, error: selectError } = await supabase
      .from('quiz_submissions')
      .select('id')
      .eq('email', submission.email)
      .maybeSingle();

    if (selectError) {
      console.error('Error checking for existing submission:', selectError);
      return { 
        data: null, 
        error: new Error('Failed to check existing submission: ' + selectError.message)
      };
    }

    let result;
    
    if (existingData) {
      // Update existing submission
      console.log('Updating existing submission for:', submission.email);
      const { data, error } = await supabase
        .from('quiz_submissions')
        .update({
          archetype: submission.archetype,
          answers: submission.answers,
          created_at: new Date().toISOString() // Update timestamp
        })
        .eq('email', submission.email)
        .select()
        .single();

      result = { data, error };
    } else {
      // Insert new submission
      console.log('Creating new submission for:', submission.email);
      const { data, error } = await supabase
        .from('quiz_submissions')
        .insert([submission])
        .select()
        .single();

      result = { data, error };
    }

    if (result.error) {
      console.error('Failed to save quiz submission:', result.error);
      return { 
        data: null, 
        error: new Error('Failed to save submission: ' + result.error.message)
      };
    }

    console.log('Successfully saved quiz submission:', result.data);
    return { data: result.data, error: null };
  } catch (error) {
    console.error('Unexpected error saving quiz submission:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('An unexpected error occurred')
    };
  }
} 