'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle, Trash2, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { requestDeletion } from './actions';

export default function ExcluirContaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await requestDeletion(email, reason);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? 'Erro ao enviar solicitação. Tente novamente.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col font-sans">
      {/* Header */}
      <header className="bg-primary px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/cart-logo-without-background.svg"
              alt="Tudo Aqui Logo"
              width={40}
              height={26}
              className="object-contain brightness-0 invert"
            />
            <span className="text-xl font-heading font-bold italic text-white">Tudo Aqui</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </header>

      <main className="flex-grow py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-6">
              <Trash2 className="w-8 h-8 text-[#FF6B6B]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-text-main tracking-tighter mb-3">
              Solicitar Exclusão de Conta
            </h1>
            <p className="text-text-muted font-medium">
              Preencha o formulário abaixo para solicitar a exclusão da sua conta no Tudo Aqui.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="flex gap-4 bg-red-50 border border-red-200 rounded-2xl p-5 mb-8">
            <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-800 mb-1">Ação irreversível</p>
              <p className="text-sm text-red-700 leading-relaxed">
                A exclusão da sua conta é <strong>permanente e irreversível</strong>. Todos os dados
                associados — incluindo lojas, catálogos de produtos, serviços cadastrados, histórico
                de pedidos e informações pessoais — serão removidos definitivamente em até{' '}
                <strong>30 dias</strong> após a confirmação da solicitação.
              </p>
            </div>
          </div>

          {/* Form or Success */}
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-green-800 mb-2">Solicitação recebida!</h2>
              <p className="text-green-700 text-sm leading-relaxed mb-6">
                Sua solicitação foi registrada com sucesso. Nossa equipe analisará o pedido e você
                receberá uma confirmação no e-mail <strong>{email}</strong> em até 5 dias úteis.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary/90 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-100/50 p-6 sm:p-8 space-y-6"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wider"
                >
                  E-mail da conta <span className="text-[#FF6B6B]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                />
                <p className="text-xs text-text-muted mt-1.5">
                  Use o mesmo e-mail cadastrado no aplicativo Tudo Aqui.
                </p>
              </div>

              {/* Reason */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wider"
                >
                  Motivo da exclusão{' '}
                  <span className="text-text-muted font-normal normal-case tracking-normal">
                    (opcional)
                  </span>
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Conte-nos o motivo para que possamos melhorar o aplicativo..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                />
              </div>

              {/* Info */}
              <div className="bg-bg-light rounded-xl p-4 text-sm text-text-muted leading-relaxed">
                Após o envio, nossa equipe analisará sua solicitação. Os dados serão removidos em
                até <strong className="text-text-main">30 dias</strong>.
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-[#FF6B6B] font-semibold text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#FF6B6B] hover:bg-[#ff5252] disabled:opacity-60 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-base"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Trash2 className="w-5 h-5" />
                )}
                {loading ? 'Enviando...' : 'Solicitar Exclusão de Conta'}
              </button>

              <p className="text-center text-xs text-text-muted">
                Mudou de ideia?{' '}
                <Link href="/" className="text-primary font-bold hover:underline">
                  Voltar ao início
                </Link>
              </p>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-text-muted">
          © 2026 Tudo Aqui — Todos os direitos reservados.{' '}
          <Link href="/" className="hover:text-primary transition-colors font-semibold">
            Voltar ao site
          </Link>
        </p>
      </footer>
    </div>
  );
}
