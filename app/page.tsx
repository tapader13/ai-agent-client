import type { Metadata } from 'next';
import { AgentCatalog } from '@/components/agent-catalog';
import type { Agent } from '@/lib/types';
import { mockAgents } from '@/lib/mock-data';
import { AuthGuard } from '@/components/auth/auth-guard';
import { Header } from '@/components/header';

async function getAgents(): Promise<Agent[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockAgents;
}

export async function generateMetadata(): Promise<Metadata> {
  const agents = await getAgents();
  const agentCount = agents.length;

  return {
    title: `ArkLab AI Agent Catalog - ${agentCount} AI Agents Available`,
    description: `Browse ${agentCount} powerful AI agents including chatbots, voice assistants, content generators, and more. Find the perfect AI solution for your business needs.`,
  };
}

export default async function HomePage() {
  const agents = await getAgents();

  return (
    <AuthGuard>
      {/* <div className='min-h-screen bg-background'> */}
      <Header />
      {/* <main> */}
      <AgentCatalog initialAgents={agents} />
      {/* </main> */}
      {/* </div> */}
    </AuthGuard>
  );
}
