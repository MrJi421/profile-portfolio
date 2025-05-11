// src/ai/flows/curate-projects.ts
'use server';

/**
 * @fileOverview AI flow to curate projects based on user interest.
 *
 * curateProjects - A function that curates projects based on user interest.
 * CurateProjectsInput - The input type for the curateProjects function.
 * CurateProjectsOutput - The return type for the curateProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurateProjectsInputSchema = z.object({
  userHistory: z
    .string()
    .describe(
      'A summary of the user history and past interactions with projects on the portfolio.'
    ),
  availableProjects: z
    .string()
    .describe('A list of available projects with their descriptions.'),
});
export type CurateProjectsInput = z.infer<typeof CurateProjectsInputSchema>;

const CurateProjectsOutputSchema = z.object({
  curatedProjects: z
    .string()
    .describe(
      'A list of project ids which are most relevant to the user, ordered by relevance.'
    ),
});
export type CurateProjectsOutput = z.infer<typeof CurateProjectsOutputSchema>;

export async function curateProjects(input: CurateProjectsInput): Promise<CurateProjectsOutput> {
  return curateProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'curateProjectsPrompt',
  input: {schema: CurateProjectsInputSchema},
  output: {schema: CurateProjectsOutputSchema},
  prompt: `You are an AI project curator. Given a user's history and a list of available projects, you will select the projects that are most relevant to the user.

User History: {{{userHistory}}}

Available Projects: {{{availableProjects}}}

Return a list of project ids which are most relevant to the user, ordered by relevance.`,
});

const curateProjectsFlow = ai.defineFlow(
  {
    name: 'curateProjectsFlow',
    inputSchema: CurateProjectsInputSchema,
    outputSchema: CurateProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
