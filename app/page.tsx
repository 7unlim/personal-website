'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Inter, Mynerve } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const mynerve = Mynerve({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-gray-300' : 'bg-white text-gray-800'
    } text-base ${inter.className}`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="flex justify-between items-center mb-24">
          <h1 className={`text-2xl font-bold ${
            isDarkMode ? 'text-orange-300' : 'text-orange-500'
          } ${mynerve.className}`}>
            Jun Lim
          </h1>
          
          <nav className="flex items-center gap-8">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative group text-2xl"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                isDarkMode ? 'bg-orange-300' : 'bg-orange-500'
              } transition-all duration-300 group-hover:w-full`}></span>
            </button>
          </nav>
        </header>

        <main className="space-y-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>San Diego, California</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">💼</span>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>University of Illinois, Urbana-Champaign</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>
                  Currently Reading{' '}
                  <Link 
                    href="https://mitpress.mit.edu/9780262542524/machine-learning/" 
                    className={`relative group inline-block ${
                      isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                    } ${mynerve.className} px-1.5 py-0.5 rounded`}
                  >
                    Machine Learning
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                      isDarkMode ? 'bg-orange-300' : 'bg-orange-500'
                    } transition-all duration-300 group-hover:w-full`}></span>
                  </Link>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">💻</span>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>C++, Python, TypeScript</span>
              </p>
            </div>
          </div>

          <section className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl">
                Hey, I&apos;m <span className={`${
                  isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                } ${mynerve.className} px-1.5 py-0.5 rounded`}>Jun</span>, nice to meet you!
              </h2> 
 
              <p>
                I&apos;m currently a <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>Computer Science</span>and 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>Statistics</span>major at the 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>University of Illinois Urbana-Champaign</span>.
                This upcoming summer, I&apos;ll be working as a 
                <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>Software Engineering Intern</span>
                at
                <Link 
                    href="https://www.banking.barclaysus.com/index.html" 
                    className={`relative group inline-block ${
                      isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                    } ${mynerve.className} px-1.5 py-0.5 rounded`}
                  >
                    Barclays
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                      isDarkMode ? 'bg-orange-300' : 'bg-orange-500'
                    } transition-all duration-300 group-hover:w-full`}></span>
                  </Link>.
                
              </p>
              
              <div className="space-y-4 text-base">
                <p>
                  Here are three quick-fire things about me:{' '}
                </p>
                <p>
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}><strong>1</strong></span> I love building <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>scalable systems</span> and pushing the bounds of <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>optimization</span> in any realm.
                </p>
                <p>
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}><strong>2</strong></span> I&apos;m captivated by financial<span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>market microstructure</span>, 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>machine learning</span>, and the continuous pursuit of improvements in 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>high-performance computing</span>. 
                </p>
                <p>
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}><strong>3</strong></span> When I&apos;m not coding, I enjoy exploring <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>probability theory</span>, playing 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>basketball</span>, 
                  and most importantly, being a <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>good older brother</span>.
                </p>
                
                <br></br>
                <p>
                  Currently, I&apos;m studying 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>machine learning</span>, 
                  both 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>supervised</span>and 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>unsupervised</span>. Specifically, I&apos;m focused on learning the 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>intuition</span> that lies behind it, from the 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>high-level concepts</span> down to the 
                  <span className={`${
                    isDarkMode ? 'text-orange-300 bg-orange-300/10' : 'text-orange-500 bg-orange-500/10'
                  } ${mynerve.className} px-1.5 py-0.5 rounded`}>math</span>itself. With this, I hope to
                  apply my learnings in a much broader context, hopefully in tandem with my interests as well.
                </p>

                <p>
                  And continually, above all, my goal is to constantly pursue learning and the growth of my knowledge, no matter the environment or subject of expertise.
                </p>
              </div>
            </div>
          </section>

          <footer className={`mt-16 pt-8 border-t ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex gap-6 text-base">
              {[
                { name: 'Github', url: 'https://github.com/7unlim' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jun-lim1/' },
                { name: 'Email', url: 'mailto:junlim3@illinois.edu' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className={`relative group ${
                    isDarkMode ? 'text-gray-300 hover:text-orange-300' : 'text-gray-800 hover:text-orange-500'
                  } transition-colors`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isDarkMode ? 'bg-orange-300' : 'bg-orange-500'
                  } transition-all duration-300 group-hover:w-full`}></span>
                </Link>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}