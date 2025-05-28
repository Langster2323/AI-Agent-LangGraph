import { NextResponse } from 'next/server';
import agentGraph from '@/agent/graph';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const result = await agentGraph.invoke({ question: message });
    
    // Simulate a delay to make it feel more realistic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ response: result.answer });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 