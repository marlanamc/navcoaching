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

// Function to save quiz submission
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

    // Now try to insert the submission
    const { data, error } = await supabase
      .from('quiz_submissions')
      .insert([submission])
      .select()
      .single();

    if (error) {
      console.error('Failed to insert quiz submission:', error);
      return { 
        data: null, 
        error: new Error('Failed to save submission: ' + error.message)
      };
    }

    console.log('Successfully saved quiz submission:', data);
    return { data, error: null };
  } catch (error) {
    console.error('Unexpected error saving quiz submission:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('An unexpected error occurred')
    };
  }
} 