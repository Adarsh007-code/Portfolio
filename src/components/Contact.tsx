import React, { useState } from 'react';
import { SOCIAL_LINKS, PROFILE_DATA } from '../data/portfolioData';
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Shield,
  MessageSquare,
  Sparkles,
  Terminal,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5 text-white/70 group-hover:text-white" />,
  Linkedin: <Linkedin className="w-5 h-5 text-[#00FF41] group-hover:text-white" />,
  Code: <Code2 className="w-5 h-5 text-[#00FF41] group-hover:text-white" />,
  Mail: <Mail className="w-5 h-5 text-[#00FF41] group-hover:text-white" />,
};

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject || 'Inquiry'}`,
          message: formData.message,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to deliver message via form service.');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      setFormStatus('error');
      setErrorMessage('Direct transmission service was blocked. You can use direct mail instead.');
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hi Adarsh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>[ TRANSMISSION: GET_IN_TOUCH ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Let&apos;s <span className="text-[#00FF41]">Connect</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            I&apos;m always interested in learning, building, and connecting with people in technology, programming, and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Verified Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Email Quick Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden space-y-4 hover:border-[#00FF41]/40 transition-all shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0c0c0c] border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-white/40">Direct Email Inbox</span>
                    <h3 className="text-lg font-bold text-white font-mono">{PROFILE_DATA.email}</h3>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00FF41]/40 text-white hover:text-[#00FF41] text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00FF41]" />
                      <span className="text-[#00FF41]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-white/60">
                Messages sent via the contact form are delivered straight to this inbox. Feel free to reach out for study collaborations, cybersecurity discussions, or opportunities.
              </p>
            </div>

            {/* Social & Platform Channels Grid */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-white/40 font-semibold uppercase tracking-wider px-1">
                Profiles &amp; Coding Platforms:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00FF41]/40 hover:bg-white/[0.05] transition-all duration-200 group flex flex-col justify-between space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#0c0c0c] border border-white/10 flex items-center justify-center">
                          {SOCIAL_ICON_MAP[link.iconName]}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#00FF41] transition-colors">
                            {link.name}
                          </h4>
                          <span className="text-[11px] font-mono text-white/40">
                            {link.usernameDisplay}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#00FF41] transition-colors" />
                    </div>

                    <div className="text-[10px] font-mono text-[#00FF41]/70 bg-[#080808] px-2 py-0.5 rounded border border-[#00FF41]/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41]" />
                      <span>{link.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-[#00FF41]/30 shadow-[0_0_30px_rgba(0,255,65,0.05)] backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00FF41]" />
                  <h3 className="font-bold text-white text-base font-['Outfit',sans-serif]">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#00FF41] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
                  <span>Delivers to Email</span>
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                      disabled={formStatus === 'sending'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs font-mono focus:outline-none focus:border-[#00FF41] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/60">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      disabled={formStatus === 'sending'}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs font-mono focus:outline-none focus:border-[#00FF41] transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white/60">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Cybersecurity Project / DSA Collaboration"
                    disabled={formStatus === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs font-mono focus:outline-none focus:border-[#00FF41] transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white/60">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note here..."
                    disabled={formStatus === 'sending'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-xs font-mono focus:outline-none focus:border-[#00FF41] transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-3.5 rounded-lg bg-[#00FF41] hover:bg-[#00dd39] text-[#050505] font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,255,65,0.25)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] cursor-pointer disabled:opacity-75"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#050505]" />
                      <span>Transmitting Message to Adarsh...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to {PROFILE_DATA.email}</span>
                    </>
                  )}
                </button>

                {/* Status Banners */}
                {formStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-[#00FF41]/15 border border-[#00FF41]/40 text-[#00FF41] text-xs font-mono space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-2 font-bold">
                      <Check className="w-4 h-4" />
                      <span>Message Delivered Successfully!</span>
                    </div>
                    <p className="text-white/80 text-[11px] pl-6">
                      Your transmission has been forwarded directly to <strong>{PROFILE_DATA.email}</strong>. I will get back to you soon.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-mono space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="px-3 py-1.5 rounded bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-white text-[11px] flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Click here to send via your email client</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
