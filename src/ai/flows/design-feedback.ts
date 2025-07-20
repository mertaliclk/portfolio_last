'use server';

/**
 * @fileOverview An AI agent that provides feedback on portfolio website design.
 *
 * - getDesignFeedback - A function that generates design feedback for a portfolio website.
 * - DesignFeedbackInput - The input type for the getDesignFeedback function.
 * - DesignFeedbackOutput - The return type for the getDesignFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignFeedbackInputSchema = z.object({
  websiteDescription: z
    .string()
    .describe('A detailed description of the portfolio website design and layout.'),
  targetAudience: z
    .string()
    .describe('The target audience for the portfolio website.'),
  designGoals: z
    .string()
    .describe('The design goals for the portfolio website.'),
});
export type DesignFeedbackInput = z.infer<typeof DesignFeedbackInputSchema>;

const DesignFeedbackOutputSchema = z.object({
  feedback: z.string().describe('AI-powered feedback on the portfolio website design.'),
  suggestions: z.string().describe('Suggestions for improving the visual appeal and user experience.'),
});
export type DesignFeedbackOutput = z.infer<typeof DesignFeedbackOutputSchema>;

export async function getDesignFeedback(input: DesignFeedbackInput): Promise<DesignFeedbackOutput> {
  return designFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designFeedbackPrompt',
  input: {schema: DesignFeedbackInputSchema},
  output: {schema: DesignFeedbackOutputSchema},
  prompt: `You are an expert web design consultant providing feedback on portfolio websites.

  Given the description of the portfolio website, the target audience, and the design goals, provide constructive feedback and suggestions for improvement.

  Website Description: {{{websiteDescription}}}
  Target Audience: {{{targetAudience}}}
  Design Goals: {{{designGoals}}}

  Provide specific feedback on the website's visual appeal, user experience, and overall effectiveness in achieving its goals.  Suggest concrete improvements.
  `,
});

const designFeedbackFlow = ai.defineFlow(
  {
    name: 'designFeedbackFlow',
    inputSchema: DesignFeedbackInputSchema,
    outputSchema: DesignFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
