import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_PRESETS } from '../data/portfolioData';
import { Terminal, Send, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';

interface TerminalLog {
  id: string;
  type: 'input' | 'output' | 'system' | 'matrix';
  content: string | string[];
  timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'init-1',
      type: 'input',
      content: 'whoami',
      timestamp: '03:10:12',
    },
    {
      id: 'init-2',
      type: 'output',
      content: [
        'User: Adarsh',
        'Profile: 2nd-Year B.Tech CSE @ GLA University, Mathura',
        'Specialization: Cybersecurity & Ethical Hacking',
      ],
      timestamp: '03:10:12',
    },
    {
      id: 'init-3',
      type: 'input',
      content: 'status',
      timestamp: '03:10:13',
    },
    {
      id: 'init-4',
      type: 'output',
      content: [
        '[✓] Learning + Building',
        '[✓] Actively strengthening DSA in Java',
        '[✓] Exploring Ethical Hacking & Network Security',
      ],
      timestamp: '03:10:13',
    },
    {
      id: 'init-5',
      type: 'input',
      content: 'focus',
      timestamp: '03:10:14',
    },
    {
      id: 'init-6',
      type: 'output',
      content: [
        '🎯 Primary: Ethical Hacking + DSA in Java',
        '🛡️ Systems: Linux Fundamentals & Computer Networks',
      ],
      timestamp: '03:10:14',
    },
  ]);

  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getTimestamp = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
  };

  const handleCommandSubmit = (cmdToRun?: string) => {
    const rawCmd = (cmdToRun || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    const time = getTimestamp();

    if (rawCmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    const newLogs: TerminalLog[] = [
      ...logs,
      {
        id: `cmd-${Date.now()}`,
        type: 'input',
        content: rawCmd,
        timestamp: time,
      },
    ];

    if (rawCmd === 'matrix') {
      newLogs.push({
        id: `out-${Date.now()}`,
        type: 'matrix',
        content: [
          '01000001 01000100 01000001 01010010 01110011 01101000',
          '[SEC_ALERT] Initializing matrix security stream...',
          '0x7F 0x45 0x4C 0x46 (ELF Binary Execution)',
          '[OK] Access Granted: Ethical Hacking Sandbox Active.',
        ],
        timestamp: time,
      });
    } else if (rawCmd === 'ping') {
      newLogs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: [
          'PING portfolio.adarsh.dev (127.0.0.1): 56 data bytes',
          '64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms',
          '64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms',
          '--- portfolio.adarsh.dev ping statistics ---',
          '2 packets transmitted, 2 received, 0% packet loss, time 1002ms',
        ],
        timestamp: time,
      });
    } else if (rawCmd === 'dsa') {
      newLogs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: [
          '⚡ Java DSA Routine:',
          '  - Language: Java (Collections, OOP, Generics)',
          '  - Topics: Arrays, Strings, Binary Search, Linked Lists, Stacks, Queues',
          '  - Goal: Continuous problem solving & algorithmic thinking',
        ],
        timestamp: time,
      });
    } else if (TERMINAL_PRESETS[rawCmd]) {
      newLogs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: TERMINAL_PRESETS[rawCmd],
        timestamp: time,
      });
    } else {
      newLogs.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: [
          `Command not found: "${rawCmd}"`,
          'Type "help" to view available commands (whoami, status, focus, skills, dsa, contact, clear).',
        ],
        timestamp: time,
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleQuickCmd = (cmd: string) => {
    handleCommandSubmit(cmd);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const copyTerminalOutput = () => {
    const text = logs
      .map((l) => {
        if (l.type === 'input') return `adarsh@portfolio:~$ ${l.content}`;
        if (Array.isArray(l.content)) return l.content.join('\n');
        return l.content;
      })
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <div className="w-full rounded-xl bg-[#0c0c0c] border border-[#00FF41]/30 shadow-[0_0_30px_rgba(0,255,65,0.05)] overflow-hidden backdrop-blur-xl flex flex-col transition-all duration-300">
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-[#1a1a1a] border-b border-[#00FF41]/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[11px] font-mono text-white/40 ml-2">
            adarsh@portfolio: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-[#00FF41] bg-[#00FF41]/10 border border-[#00FF41]/30">
            Active CLI
          </span>
          <button
            onClick={copyTerminalOutput}
            title="Copy Terminal Logs"
            className="p-1 rounded text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#00FF41]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 sm:p-5 font-['JetBrains_Mono',monospace] text-xs sm:text-[13px] leading-relaxed max-h-[360px] overflow-y-auto space-y-3 bg-[#0c0c0c]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-[11px] text-white/30 pb-1 border-b border-white/10 flex justify-between items-center font-mono">
          <span>GLA University // Cyber Security Lab Session</span>
          <span className="text-[#00FF41] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
            ONLINE
          </span>
        </div>

        {logs.map((log) => (
          <div key={log.id} className="space-y-1 font-mono">
            {log.type === 'input' ? (
              <div className="flex items-center gap-2 text-white">
                <span className="text-white/40">$</span>
                <span className="text-[#00FF41] font-semibold">{log.content as string}</span>
                <span className="text-[10px] text-white/30 ml-auto hidden sm:inline">
                  {log.timestamp}
                </span>
              </div>
            ) : log.type === 'matrix' ? (
              <div className="pl-4 py-1.5 border-l border-[#00FF41]/40 bg-[#00FF41]/5 rounded-r text-[#00FF41] space-y-0.5 font-mono text-xs">
                {(log.content as string[]).map((line, idx) => (
                  <div key={idx} className="tracking-wide">
                    {line}
                  </div>
                ))}
              </div>
            ) : (
              <div className="pl-4 py-1 border-l border-[#00FF41]/30 text-[#00FF41]/80 space-y-1 text-xs sm:text-[12.5px]">
                {Array.isArray(log.content) ? (
                  log.content.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-white/40 select-none">&gt;</span>
                      <span className="text-white/90">{line}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-white/90">{log.content}</div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommandSubmit();
          }}
          className="flex items-center gap-2 pt-2 border-t border-white/5"
        >
          <span className="text-white/40 font-semibold select-none">$</span>
          <div className="flex-1 flex items-center relative">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'whoami', 'focus'..."
              className="w-full bg-transparent text-[#00FF41] placeholder:text-white/30 focus:outline-none font-mono text-xs sm:text-[13px]"
            />
          </div>
          <button
            type="submit"
            aria-label="Execute Command"
            className="p-1.5 rounded bg-white/5 border border-white/10 text-white/60 hover:text-[#00FF41] hover:border-[#00FF41]/40 transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

        <div ref={terminalEndRef} />
      </div>

      {/* Quick Interactive Command Pills */}
      <div className="px-4 py-2.5 bg-[#141414] border-t border-[#00FF41]/20 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-mono text-white/40 mr-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#00FF41]" />
          Run:
        </span>
        {['whoami', 'status', 'focus', 'skills', 'dsa', 'ping', 'matrix', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleQuickCmd(cmd)}
            className="px-2 py-0.5 rounded bg-white/5 hover:bg-[#00FF41]/10 text-white/70 hover:text-[#00FF41] border border-white/10 hover:border-[#00FF41]/30 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
