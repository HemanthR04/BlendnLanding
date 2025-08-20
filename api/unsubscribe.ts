// Using standard web APIs for Vite/React project
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with proper error handling
const supabaseUrl = 'https://rycftadewrklmsswzviy.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseKey) {
  console.error('Missing Supabase API key');
}

const supabase = createClient(supabaseUrl, supabaseKey || '');

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    console.log('GET unsubscribe request with token:', token);

    if (!token) {
      console.log('Missing token in GET request');
      return Response.json(
        { error: 'Missing unsubscribe token' },
        { status: 400 }
      );
    }

    if (!supabaseKey) {
      console.error('Supabase key not configured');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Handle unsubscribe directly in the API
    console.log('Attempting to update database with token:', token);
    
    const { data, error } = await supabase
      .from('waitlist_signups')
      .update({ 
        status: 'unsubscribed',
        confirmed_at: new Date().toISOString()
      })
      .eq('unsub_token', token)
      .select('email');

    if (error) {
      console.error('Supabase update error:', error);
      return Response.json(
        { error: 'Database update failed', details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.log('No records found for token:', token);
      return Response.json(
        { error: 'Invalid unsubscribe token' },
        { status: 400 }
      );
    }

    console.log('Successfully unsubscribed:', data[0].email);

    // Redirect to success page
    return Response.redirect(new URL('/unsubscribe-success', request.url));

  } catch (error) {
    console.error('Unsubscribe API error:', error);
    return Response.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    console.log('POST unsubscribe request with token:', token);

    if (!token) {
      console.log('Missing token in POST request');
      return Response.json(
        { error: 'Missing unsubscribe token' },
        { status: 400 }
      );
    }

    if (!supabaseKey) {
      console.error('Supabase key not configured');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Handle unsubscribe directly in the API
    console.log('Attempting to update database with token:', token);
    
    const { data, error } = await supabase
      .from('waitlist_signups')
      .update({ 
        status: 'unsubscribed',
        confirmed_at: new Date().toISOString()
      })
      .eq('unsub_token', token)
      .select('email');

    if (error) {
      console.error('Supabase update error:', error);
      return Response.json(
        { error: 'Database update failed', details: error.message },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.log('No records found for token:', token);
      return Response.json(
        { error: 'Invalid unsubscribe token' },
        { status: 400 }
      );
    }

    console.log('Successfully unsubscribed:', data[0].email);

    return Response.json({ 
      success: true, 
      message: `Successfully unsubscribed ${data[0].email} from the waitlist.`
    });

  } catch (error) {
    console.error('Unsubscribe API error:', error);
    return Response.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
