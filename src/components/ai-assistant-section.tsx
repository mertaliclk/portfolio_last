'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getDesignFeedback, type DesignFeedbackOutput } from '@/ai/flows/design-feedback';
import { Lightbulb, Bot } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  websiteDescription: z.string().min(10, { message: 'Please provide a more detailed description.' }),
  targetAudience: z.string().min(5, { message: 'Please describe your target audience.' }),
  designGoals: z.string().min(10, { message: 'Please describe your design goals.' }),
});

export function AiAssistantSection() {
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<DesignFeedbackOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteDescription: '',
      targetAudience: '',
      designGoals: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      setError(null);
      setFeedback(null);
      try {
        const result = await getDesignFeedback(values);
        setFeedback(result);
      } catch (err) {
        setError('Failed to get feedback. Please try again.');
        console.error(err);
      }
    });
  };

  return (
    <section id="ai-assistant" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight flex items-center justify-center gap-2">
            <Bot className="h-8 w-8 text-primary" /> AI Design Assistant
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get instant, AI-powered feedback on your portfolio's design concepts. Describe your site, audience, and goals to receive expert suggestions. (This requires a running server and is not available on static exports).
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl grid gap-8 md:grid-cols-2">
          <Card className="text-left">
            <CardHeader>
              <CardTitle>Describe Your Design</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="websiteDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe the layout, color scheme, and feel of your site." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Audience</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Recruiters, potential clients, fellow developers" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="designGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Design Goals</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Look professional, showcase creativity, be easy to navigate" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? 'Generating Feedback...' : 'Get Feedback'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <CardTitle>AI Feedback</CardTitle>
              <CardDescription>Suggestions will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isPending && (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="pt-4 space-y-2">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              )}
              {error && <p className="text-destructive">{error}</p>}
              {feedback && (
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-2 flex items-center gap-1"><Lightbulb className="h-4 w-4 text-accent"/>Feedback</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{feedback.feedback}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 flex items-center gap-1"><Lightbulb className="h-4 w-4 text-accent"/>Suggestions</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{feedback.suggestions}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
