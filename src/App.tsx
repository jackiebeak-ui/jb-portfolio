import { ArrowRight, ChevronRight, Circle, House, NotebookPen, Target } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: 'easeOut' }
};

const glanceMetrics = [
  { label: 'Down Payment', value: '$34,600', hint: '79% of 6-month target', tone: 'olive' },
  { label: 'Cash Flow', value: '+$1,480', hint: 'Monthly cushion after essentials', tone: 'sand' },
  { label: 'Debt-to-Income Ratio', value: '31.2%', hint: 'Within lender-ready range', tone: 'olive' }
];

const timeline = [
  { month: 'May', title: 'Stabilize emergency reserve', note: 'Add $600 transfer and keep spending steady.', state: 'complete' },
  { month: 'Jun', title: 'Close card utilization gap', note: 'Pay revolving balance down by $900.', state: 'active' },
  { month: 'Jul', title: 'Pre-approval document set', note: 'Collect W2s, statements, and verification letter.', state: 'upcoming' }
];

const scenarios = [
  {
    title: 'Steady Path',
    payment: '$3,150 / mo',
    impact: 'Conservative purchase target by Q1 2027.',
    delta: 'Highest cash resilience'
  },
  {
    title: 'Accelerated Path',
    payment: '$3,360 / mo',
    impact: 'Potential pre-approval by Nov 2026.',
    delta: 'Requires one reduced travel cycle'
  },
  {
    title: 'Flex Path',
    payment: '$2,980 / mo',
    impact: 'Preserves optionality with lower monthly strain.',
    delta: 'Later purchase window'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <header className="ledger-header">
        <div>
          <p className="eyebrow">Peach Ledger Pro</p>
          <h1>Good morning, Jackie.</h1>
          <p className="subhead">A calm planning notebook for your first-home readiness.</p>
        </div>
        <button className="primary-btn">
          Open full briefing <ArrowRight size={16} />
        </button>
      </header>

      <main className="content-shell">
        <motion.section className="briefing-card ruled" {...fadeInUp} viewport={{ once: true }}>
          <div className="section-head">
            <p className="eyebrow">This month&apos;s briefing</p>
            <span className="mono">April 2026 close</span>
          </div>
          <div className="brief-grid">
            <article>
              <h2>Primary insight</h2>
              <p className="hero-number">84</p>
              <p className="reading">Home Readiness Score</p>
            </article>
            <article>
              <h3>Reason</h3>
              <p>
                Savings consistency improved for the third straight month, and debt ratios remain within a lender-comfortable range.
              </p>
            </article>
            <article>
              <h3>Next best action</h3>
              <p>Schedule a 20-minute pre-approval prep call after the June utilization payoff posts.</p>
            </article>
          </div>
        </motion.section>

        <div className="two-col">
          <motion.section className="paper-card ruled" {...fadeInUp} viewport={{ once: true }}>
            <div className="section-head">
              <h2>At a glance</h2>
              <span className="eyebrow">Core 3</span>
            </div>
            <div className="metrics">
              {glanceMetrics.map((metric) => (
                <div key={metric.label} className={`metric metric-${metric.tone}`}>
                  <p className="metric-label">{metric.label}</p>
                  <p className="metric-value mono">{metric.value}</p>
                  <p className="metric-hint">{metric.hint}</p>
                </div>
              ))}
            </div>
            <details>
              <summary>View deeper financial detail</summary>
              <p className="detail-copy">
                Liquidity runway is 5.8 months, fixed obligations decreased 2.4% month-over-month, and discretionary spend trended 6% lower.
              </p>
            </details>
          </motion.section>

          <motion.aside className="next-move ruled" {...fadeInUp} viewport={{ once: true }}>
            <div className="section-head">
              <h2>Next Best Move</h2>
              <Target size={16} />
            </div>
            <p className="advisor-note">Make one focused move this week: route your next bonus to card principal, then lock the autopay floor.</p>
            <ul>
              <li><ChevronRight size={14} />Est. score lift: +2 readiness points</li>
              <li><ChevronRight size={14} />Effort: 15 minutes</li>
              <li><ChevronRight size={14} />Confidence: High</li>
            </ul>
            <button className="secondary-btn">Mark as planned</button>
          </motion.aside>
        </div>

        <motion.section className="paper-card ruled" {...fadeInUp} viewport={{ once: true }}>
          <div className="section-head">
            <h2>Waypoint Timeline</h2>
            <House size={16} />
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.title} className={`waypoint ${item.state}`}>
                <div className="dot"><Circle size={10} /></div>
                <p className="mono month">{item.month}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <div className="two-col">
          <motion.section className="paper-card ruled" {...fadeInUp} viewport={{ once: true }}>
            <div className="section-head">
              <h2>Guide Note</h2>
              <NotebookPen size={16} />
            </div>
            <p className="advisor-note">
              Your progress is stable and intentional. Keep your current contribution rhythm, and avoid opening new credit lines until your
              pre-approval review is complete.
            </p>
          </motion.section>

          <motion.section className="paper-card ruled" {...fadeInUp} viewport={{ once: true }}>
            <div className="section-head">
              <h2>Gentle progress chart</h2>
              <span className="mono">90-day</span>
            </div>
            <div className="chart" aria-hidden>
              <svg viewBox="0 0 320 120" className="chart-svg">
                <path d="M8 92 C 52 88, 90 80, 124 74 S 190 58, 232 49 S 284 42, 312 28" className="chart-line" />
              </svg>
            </div>
          </motion.section>
        </div>

        <motion.section className="paper-card ruled" {...fadeInUp} viewport={{ once: true }}>
          <div className="section-head">
            <h2>Scenario Path Cards</h2>
            <span className="eyebrow">What-if planning</span>
          </div>
          <div className="scenario-grid">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="scenario-card">
                <h3>{scenario.title}</h3>
                <p className="mono scenario-payment">{scenario.payment}</p>
                <p>{scenario.impact}</p>
                <p className="scenario-delta">{scenario.delta}</p>
              </article>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
