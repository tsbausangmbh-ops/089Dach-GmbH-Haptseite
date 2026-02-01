import { z } from "zod";

export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export interface User {
  id: string;
  username: string;
  password: string;
}

export const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  subject?: string;
  message: string;
  createdAt: Date;
}

export const insertLeadSchema = z.object({
  problem: z.string().min(1),
  timing: z.string().min(1),
  details: z.string().optional(),
  name: z.string().min(1),
  phone: z.string().optional(),
  email: z.string().transform(val => val === "" ? undefined : val).pipe(z.string().email().optional()),
  callbackStart: z.string().nullable().optional().transform(val => val ? new Date(val) : undefined),
  callbackEnd: z.string().nullable().optional().transform(val => val ? new Date(val) : undefined),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;

export interface Lead {
  id: string;
  problem: string;
  timing: string;
  details?: string;
  name: string;
  phone: string;
  email?: string;
  callbackStart?: Date;
  callbackEnd?: Date;
  createdAt: Date;
}
