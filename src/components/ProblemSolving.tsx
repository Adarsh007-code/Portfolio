import React, { useState } from 'react';
import { Binary, Code2, ExternalLink, Flame, CheckCircle, Terminal, Play, Cpu, ArrowUpRight } from 'lucide-react';

export const ProblemSolving: React.FC = () => {
  const [selectedSnippet, setSelectedSnippet] = useState<'binarySearch' | 'twoPointers' | 'linkedList'>('binarySearch');

  const snippets = {
    binarySearch: {
      title: 'Binary Search (Iterative)',
      language: 'Java',
      timeComplexity: 'O(log N)',
      spaceComplexity: 'O(1)',
      description: 'Divide and conquer strategy on sorted arrays to achieve logarithmic search time.',
      code: `public class BinarySearch {
    public static int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        
        while (low <= high) {
            // Prevent integer overflow
            int mid = low + (high - low) / 2;
            
            if (nums[mid] == target) {
                return mid; // Target found
            } else if (nums[mid] < target) {
                low = mid + 1; // Search right half
            } else {
                high = mid - 1; // Search left half
            }
        }
        return -1; // Target not present
    }
}`,
    },
    twoPointers: {
      title: 'Two Sum II (Sorted Array)',
      language: 'Java',
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(1)',
      description: 'Two-pointer technique from opposite ends to find target sum in linear time.',
      code: `public class TwoPointerSum {
    public static int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;
        
        while (left < right) {
            int currentSum = numbers[left] + numbers[right];
            
            if (currentSum == target) {
                return new int[]{left + 1, right + 1}; // 1-indexed
            } else if (currentSum < target) {
                left++; // Increase sum
            } else {
                right--; // Decrease sum
            }
        }
        return new int[]{-1, -1};
    }
}`,
    },
    linkedList: {
      title: 'Reverse Linked List',
      language: 'Java',
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(1)',
      description: 'Iterative pointer manipulation to invert singly linked list pointers in-place.',
      code: `public class ReverseList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        
        while (current != null) {
            ListNode nextNode = current.next; // Save next
            current.next = prev;              // Invert pointer
            prev = current;                   // Advance prev
            current = nextNode;               // Advance current
        }
        return prev; // New head of reversed list
    }
}`,
    },
  };

  const active = snippets[selectedSnippet];

  return (
    <section id="dsa" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <Binary className="w-3.5 h-3.5" />
            <span>[ ALGORITHMS: DSA_PRACTICE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Coding &amp; <span className="text-[#00FF41]">Problem Solving</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Building strong analytical foundations in Java, mastering time &amp; space complexities, and preparing for algorithmic problem solving.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-3 hover:border-[#00FF41]/40 hover:bg-white/[0.05] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41] font-mono font-bold text-sm">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">DSA in Java</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Practicing fundamental data structures including Arrays, Strings, Linked Lists, Stacks, Queues, and searching algorithms in Java.
            </p>
            <div className="pt-2 text-xs font-mono text-[#00FF41] flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Core Language Choice</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-3 hover:border-[#00FF41]/40 hover:bg-white/[0.05] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41] font-mono font-bold text-sm">
              <Binary className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">Problem Solving</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Focusing on clean code decomposition, edge-case identification, mathematical constraints, and optimizing Big-O complexities.
            </p>
            <div className="pt-2 text-xs font-mono text-[#00FF41] flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Logical Analysis</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-3 hover:border-[#00FF41]/40 hover:bg-white/[0.05] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#00FF41]/10 border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41] font-mono font-bold text-sm">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">LeetCode Practice</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Solving curated problem sets on platforms like LeetCode and HackerRank to build consistent problem pattern recognition.
            </p>
            <div className="pt-2 text-xs font-mono text-[#00FF41] flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Active Routine</span>
            </div>
          </div>
        </div>

        {/* Interactive Java Code Editor / Snippet Inspector */}
        <div className="rounded-2xl bg-[#0c0c0c] border border-[#00FF41]/30 shadow-[0_0_30px_rgba(0,255,65,0.05)] overflow-hidden backdrop-blur-xl group transition-all duration-300">
          {/* Editor Header Bar */}
          <div className="p-4 sm:p-5 bg-[#141414] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 font-mono text-xs text-white/50 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#00FF41]" />
                Java Algorithm Implementations
              </span>
            </div>

            {/* Algorithm Selector Buttons */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedSnippet('binarySearch')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedSnippet === 'binarySearch'
                    ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10'
                }`}
              >
                Binary Search
              </button>
              <button
                onClick={() => setSelectedSnippet('twoPointers')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedSnippet === 'twoPointers'
                    ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10'
                }`}
              >
                Two Sum (Two Pointers)
              </button>
              <button
                onClick={() => setSelectedSnippet('linkedList')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedSnippet === 'linkedList'
                    ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/10'
                }`}
              >
                Reverse Linked List
              </button>
            </div>
          </div>

          {/* Complexity Banner */}
          <div className="px-6 py-3 bg-[#101010] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold">{active.title}</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-white/60 hidden sm:inline">{active.description}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/80">
                Time: <strong className="text-[#00FF41]">{active.timeComplexity}</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41]">
                Space: <strong>{active.spaceComplexity}</strong>
              </span>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="p-4 sm:p-6 overflow-x-auto font-['JetBrains_Mono',monospace] text-xs sm:text-[13px] leading-relaxed text-[#00FF41]/90 bg-[#080808]">
            <pre>
              <code>{active.code}</code>
            </pre>
          </div>
        </div>

        {/* Coding Profiles Banner */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white font-['Outfit',sans-serif]">
              Connect on Coding Platforms
            </h4>
            <p className="text-white/50 text-xs sm:text-sm">
              Follow my problem-solving activity, LeetCode submissions, and public repositories.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://leetcode.com/u/Adarsh24leet/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono font-medium flex items-center gap-2 transition-all hover:border-[#00FF41]/40"
            >
              <Code2 className="w-4 h-4 text-[#00FF41]" />
              <span>LeetCode (@Adarsh24leet)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
            </a>

            <a
              href="https://github.com/Adarsh007-code"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono font-medium flex items-center gap-2 transition-all hover:border-[#00FF41]/40"
            >
              <ExternalLink className="w-4 h-4 text-[#00FF41]" />
              <span>GitHub (@Adarsh007-code)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
