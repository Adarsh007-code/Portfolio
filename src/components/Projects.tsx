import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Gamepad2,
  RefreshCw,
  Sparkles,
  ChevronRight,
  Layers,
  Terminal,
  Check,
  PlusCircle,
} from 'lucide-react';

export const Projects: React.FC = () => {
  // Interactive Number Guessing Game state
  const [targetNumber, setTargetNumber] = useState<number>(() => Math.floor(Math.random() * 100) + 1);
  const [guessInput, setGuessInput] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [gameMessage, setGameMessage] = useState<{ text: string; type: 'info' | 'higher' | 'lower' | 'win' }>({
    text: 'Guess a number between 1 and 100 to start playing!',
    type: 'info',
  });
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'code'>('overview');

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(guessInput, 10);
    if (isNaN(num) || num < 1 || num > 100) {
      setGameMessage({ text: 'Please enter a valid integer between 1 and 100.', type: 'info' });
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (num === targetNumber) {
      setGameMessage({
        text: `🎯 Correct! You found the number (${targetNumber}) in ${newAttempts} attempts!`,
        type: 'win',
      });
      setIsGameOver(true);
    } else if (num < targetNumber) {
      setGameMessage({
        text: `🔼 Higher! ${num} is too low. Try again.`,
        type: 'higher',
      });
    } else {
      setGameMessage({
        text: `🔽 Lower! ${num} is too high. Try again.`,
        type: 'lower',
      });
    }
    setGuessInput('');
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuessInput('');
    setAttempts(0);
    setGameMessage({ text: 'Game reset! Guess a number between 1 and 100.', type: 'info' });
    setIsGameOver(false);
  };

  const javaSourceCode = `import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        int targetNumber = random.nextInt(100) + 1; // 1 to 100
        int attempts = 0;
        boolean hasGuessedCorrectly = false;
        
        System.out.println("=== Welcome to Java Number Guessing Game ===");
        System.out.println("I have selected a number between 1 and 100.");
        
        while (!hasGuessedCorrectly) {
            System.out.print("Enter your guess: ");
            if (!scanner.hasNextInt()) {
                System.out.println("Invalid input! Please enter a valid number.");
                scanner.next(); // Consume invalid token
                continue;
            }
            
            int guess = scanner.nextInt();
            attempts++;
            
            if (guess == targetNumber) {
                hasGuessedCorrectly = true;
                System.out.printf("Congratulations! You guessed it in %d attempts.%n", attempts);
            } else if (guess < targetNumber) {
                System.out.println("Too Low! Try a higher number.");
            } else {
                System.out.println("Too High! Try a lower number.");
            }
        }
        scanner.close();
    }
}`;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>[ BUILDS: PROJECT_PORTFOLIO ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Featured <span className="text-[#00FF41]">Projects</span> &amp; Builds
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Hands-on programming projects built during my coursework and self-directed practice in Java and systems fundamentals.
          </p>
        </div>

        {/* Featured Project: Number Guessing Game (Interactive Showcase) */}
        <div className="rounded-2xl bg-[#0c0c0c] border border-[#00FF41]/30 shadow-[0_0_30px_rgba(0,255,65,0.05)] overflow-hidden backdrop-blur-xl group transition-all duration-300">
          {/* Top Bar with Project Metadata and View Mode Switcher */}
          <div className="p-6 sm:p-8 border-b border-white/10 bg-[#121212] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-semibold">
                  Featured Java Project
                </span>
                <span className="text-xs font-mono text-white/40">GLA Coursework &amp; Practice</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit',sans-serif]">
                Number Guessing Game
              </h3>
              <p className="text-white/60 text-sm max-w-2xl">
                A Java-based number guessing game developed as a programming project to practice Java fundamentals, conditional logic, loops, user input validation, and random number generation.
              </p>
            </div>

            {/* View Mode Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'simulator'
                    ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                Live Demo
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'code'
                    ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Java Code
              </button>
            </div>
          </div>

          {/* Dynamic Tab Content */}
          <div className="p-6 sm:p-8 bg-[#0c0c0c]">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <h4 className="text-base font-bold text-white font-['Outfit',sans-serif] flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00FF41]" />
                    Key Architecture &amp; Implementation Highlights
                  </h4>
                  <ul className="space-y-3 text-sm text-white/70">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00FF41] font-mono font-bold">&gt;</span>
                      <span><strong className="text-white">Java Core Logic:</strong> Built with Scanner user input stream, dynamic number generation using java.util.Random, and while-loop game cycles.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00FF41] font-mono font-bold">&gt;</span>
                      <span><strong className="text-white">Input Validation:</strong> Handles non-numeric inputs cleanly using scanner verification to avoid InputMismatchException runtime crashes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#00FF41] font-mono font-bold">&gt;</span>
                      <span><strong className="text-white">Feedback &amp; Metrics:</strong> Real-time directional feedback (&ldquo;Too High&rdquo; vs &ldquo;Too Low&rdquo;) with attempt counter tracking efficiency.</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {['Java', 'Scanner API', 'Control Flow', 'Conditionals', 'Loops', 'CLI'].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-[#00FF41]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => setActiveTab('simulator')}
                      className="px-4 py-2 rounded-lg bg-[#00FF41] hover:bg-[#00dd39] text-[#050505] text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                    >
                      <Gamepad2 className="w-4 h-4" />
                      <span>Play Simulator in Browser</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Code2 className="w-4 h-4 text-[#00FF41]" />
                      <span>View Java Source</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 rounded-xl bg-[#141414] border border-[#00FF41]/20 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white/40">
                    <span>Console Preview</span>
                    <span className="text-[#00FF41]">Java CLI</span>
                  </div>
                  <div className="text-white/60 space-y-1 leading-relaxed">
                    <p className="text-[#00FF41]">$ java NumberGuessingGame</p>
                    <p className="text-white/80">=== Welcome to Java Number Guessing Game ===</p>
                    <p className="text-white/50">I have selected a number between 1 and 100.</p>
                    <p className="text-white/80">Enter your guess: <span className="text-[#00FF41]">50</span></p>
                    <p className="text-amber-400">&gt; Too Low! Try a higher number.</p>
                    <p className="text-white/80">Enter your guess: <span className="text-[#00FF41]">75</span></p>
                    <p className="text-[#00FF41]">&gt; Congratulations! You guessed it in 2 attempts.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'simulator' && (
              <div className="max-w-xl mx-auto p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-[#00FF41]" />
                    <span className="font-mono text-sm font-bold text-white">Live Java Game Simulator</span>
                  </div>
                  <button
                    onClick={resetGame}
                    className="flex items-center gap-1 text-xs font-mono text-white/50 hover:text-[#00FF41] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>

                {/* Game Status Banner */}
                <div
                  className={`p-4 rounded-xl font-mono text-xs sm:text-sm border transition-all ${
                    gameMessage.type === 'win'
                      ? 'bg-[#00FF41]/15 border-[#00FF41]/40 text-[#00FF41]'
                      : gameMessage.type === 'higher'
                      ? 'bg-white/5 border-white/20 text-white'
                      : gameMessage.type === 'lower'
                      ? 'bg-white/5 border-white/20 text-white'
                      : 'bg-white/[0.02] border-white/10 text-white/70'
                  }`}
                >
                  {gameMessage.text}
                </div>

                {/* Score & Attempts Counter */}
                <div className="flex items-center justify-between text-xs font-mono text-white/50">
                  <span>Range: <strong className="text-white">1 - 100</strong></span>
                  <span>Attempts Made: <strong className="text-[#00FF41] font-bold">{attempts}</strong></span>
                </div>

                {/* Guess Form */}
                <form onSubmit={handleGuessSubmit} className="flex gap-3">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    disabled={isGameOver}
                    value={guessInput}
                    onChange={(e) => setGuessInput(e.target.value)}
                    placeholder="Enter your guess (1-100)..."
                    className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 focus:border-[#00FF41] text-white placeholder:text-white/30 font-mono text-sm focus:outline-none"
                  />
                  {isGameOver ? (
                    <button
                      type="button"
                      onClick={resetGame}
                      className="px-5 py-2.5 rounded-lg bg-[#00FF41] text-[#050505] font-mono font-bold text-xs hover:bg-[#00dd39] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Play Again
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-lg bg-[#00FF41] text-[#050505] font-mono font-bold text-xs hover:bg-[#00dd39] transition-colors shadow-[0_0_12px_rgba(0,255,65,0.25)] cursor-pointer"
                    >
                      Submit Guess
                    </button>
                  )}
                </form>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="rounded-xl bg-[#080808] border border-white/10 overflow-hidden font-['JetBrains_Mono',monospace] text-xs">
                <div className="px-4 py-2.5 bg-[#141414] border-b border-white/10 flex items-center justify-between text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
                    <span>NumberGuessingGame.java</span>
                  </div>
                  <span className="text-[11px] text-white/40">Standard Java CLI implementation</span>
                </div>
                <pre className="p-4 sm:p-6 overflow-x-auto text-[#00FF41]/90 leading-relaxed text-xs">
                  <code>{javaSourceCode}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Future Projects Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Project 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/15 hover:border-[#00FF41]/40 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0c0c0c] border border-white/10 flex items-center justify-center text-[#00FF41]">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30">
                  Upcoming Exploration
                </span>
              </div>
              <h4 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                Network Security / Port Scanner Utility
              </h4>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Planned exploratory project investigating socket programming, TCP handshake inspection, and basic host discovery tools as part of networking coursework.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Stack: Java / C / Sockets</span>
              <span className="text-[#00FF41]">In Design Phase</span>
            </div>
          </div>

          {/* Upcoming Project 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/15 hover:border-[#00FF41]/40 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0c0c0c] border border-white/10 flex items-center justify-center text-[#00FF41]">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/30">
                  In Progress
                </span>
              </div>
              <h4 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                More Projects Coming Soon...
              </h4>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Building actively as my 2nd-year studies and DSA journey progress. New repositories for cybersecurity tools and Java algorithms will be documented here.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Continuously Building</span>
              <span className="text-[#00FF41]">Stay Tuned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
