'use server';

import { supabaseAdmin } from '@/lib/supabase';

export async function requestDeletion(
  email: string,
  reason: string
): Promise<{ success: boolean; error?: string }> {
  if (!email) return { success: false, error: 'E-mail obrigatório' };

  const { error } = await supabaseAdmin.from('deletion_requests').insert([
    {
      user_id: null,
      email,
      reason: reason || 'Solicitado via landing page',
      status: 'pending',
    },
  ]);

  if (error) return { success: false, error: error.message };
  return { success: true };
}
