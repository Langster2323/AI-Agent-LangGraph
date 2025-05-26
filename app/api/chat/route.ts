import { NextResponse } from 'next/server';
import writeQuery from '@/agent/writeQuery';
// const dummyResponses = [
//   "That's an interesting question! Let me think about that...",
//   "I understand what you're asking. Here's what I think...",
//   "Based on my analysis, I would suggest...",
//   "That's a great point! Here's my perspective...",
//   "I'm glad you asked that. Let me explain...",
// ];

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const response = await writeQuery({ question: message });
    
    // Simulate a delay to make it feel more realistic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get a random response from our dummy responses
    // const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
    
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 