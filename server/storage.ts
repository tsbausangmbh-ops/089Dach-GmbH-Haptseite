export interface User {
  id: string;
  username: string;
  password: string;
}

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

export type InsertUser = Omit<User, 'id'>;
export type InsertContact = Omit<Contact, 'id' | 'createdAt'>;
export type InsertLead = Omit<Lead, 'id' | 'createdAt'>;

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createLead(lead: InsertLead): Promise<Lead>;
}

class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private contacts: Map<string, Contact> = new Map();
  private leads: Map<string, Lead> = new Map();

  private generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.generateId();
    const user: User = { id, ...insertUser };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.generateId();
    const contact: Contact = { 
      id, 
      ...insertContact, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.generateId();
    const lead: Lead = { 
      id, 
      ...insertLead, 
      createdAt: new Date() 
    };
    this.leads.set(id, lead);
    return lead;
  }
}

export const storage = new MemStorage();
