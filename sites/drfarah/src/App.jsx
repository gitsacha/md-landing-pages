import { useState, useEffect } from 'react'
import {
  Phone, Calendar, MapPin, Clock, Star, Shield,
  Stethoscope, CheckCircle, ChevronRight,
  Menu, X, Mail, Sparkles, HeartPulse
} from 'lucide-react'
import './App.css'

const BOOKING_URL = 'https://myriad.health/book?token=1PzxMIJMYqxWiTBj4Z'
const PHONE = '310-467-0101'
const PHONE_HREF = 'tel:+13104670101'
const INSTAGRAM = 'https://www.instagram.com/drfaraheskandari/'
const LINKEDIN = 'https://www.linkedin.com/in/farahnaz-eskandari-846aa454'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-triggered animations via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#" className="logo">
            <div className="logo-mark">FE</div>
            <div className="logo-text">
              <span className="logo-name">Dr. Farah Eskandari</span>
              <span className="logo-title">Board-Certified Physician</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#specialties">Specialties</a>
            <a href="#reviews">Reviews</a>
            <a href={BOOKING_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
              <Calendar size={14} /> <span>Book Same-Day Visit</span>
            </a>
          </nav>

          <button className="mobile-toggle" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ===== HERO =====
        CRO: Value prop clarity within 5 seconds. Outcome-focused headline.
        Psychology: Authority bias (30+ years, board certified), social proof (5.0 rating).
        Copywriting: Specific > vague. Benefit-first, not feature-first.

        Headline alternatives (test these):
        Alt A: "Sick Today? Treated Today." — Problem-focused, mirrors urgency search intent
        Alt B: "The Doctor Who Treats You Like a Person, Not a Number" — Differentiation-focused, emotional
        Alt C: "Skip the ER. See a Board-Certified Physician Today." — Outcome + authority in one line
      */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-entrance">
            <div className="hero-badge">
              <Shield size={14} /> Beverly Hills VIP Urgent Care
            </div>
            <h1>
              Feel Better in Hours, <span>Not Days</span>
            </h1>
            <p>
              Skip the 4-hour ER wait. See a board-certified physician with 30+ years
              of experience — in a private Beverly Hills office where you're treated
              like a person, not a number.
            </p>
            <div className="hero-actions">
              <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} /> <span>Book Your Same-Day Visit</span>
              </a>
              <a href={PHONE_HREF} className="btn-secondary">
                <Phone size={18} /> <span>Call Now: {PHONE}</span>
              </a>
            </div>

            {/* CRO: Social proof + authority near CTA. Anchoring with specifics. */}
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">5.0</div>
                <div className="stat-label">Google Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">ABFM</div>
                <div className="stat-label">Board Certified</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://drfarahvipurgentcare.com/wp-content/uploads/2025/02/dr-farah-about.png"
              alt="Dr. Farah Eskandari, MD — Board-Certified Physician in Beverly Hills"
            />
          </div>
        </div>
        <div className="hero-fade" />
      </section>

      {/* ===== PROBLEM/PAIN =====
        Copywriting: Show you understand their situation before pitching solutions.
        Psychology: Contrast effect (before/after), loss aversion.
      */}
      <section className="section section-alt" id="why">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Why Patients Choose Us</div>
            <h2>Urgent Care Shouldn't Feel Like a Waiting Room</h2>
            <p>You deserve better than assembly-line medicine.</p>
          </div>

          <div className="pain-grid">
            <div className="pain-card pain-bad fade-up">
              <h3>Typical Urgent Care</h3>
              <ul>
                <li><X size={16} className="icon-bad" /> 2-4 hour wait times</li>
                <li><X size={16} className="icon-bad" /> Different doctor every visit</li>
                <li><X size={16} className="icon-bad" /> 5 minutes with the physician</li>
                <li><X size={16} className="icon-bad" /> No follow-up after your visit</li>
                <li><X size={16} className="icon-bad" /> Cold, crowded waiting room</li>
              </ul>
            </div>
            <div className="pain-card pain-good fade-up">
              <h3>Dr. Farah's VIP Care</h3>
              <ul>
                <li><CheckCircle size={16} className="icon-good" /> Seen promptly — no long waits</li>
                <li><CheckCircle size={16} className="icon-good" /> Same doctor who knows your history</li>
                <li><CheckCircle size={16} className="icon-good" /> Thorough assessment, never rushed</li>
                <li><CheckCircle size={16} className="icon-good" /> Personal follow-up call after treatment</li>
                <li><CheckCircle size={16} className="icon-good" /> Private, comfortable Beverly Hills office</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES =====
        CRO: Clear benefit-first service descriptions. Each card answers "what's in it for me?"
        Copywriting: Connect feature -> benefit -> outcome.
      */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">What We Treat</div>
            <h2>From Urgent Needs to Long-Term Wellness</h2>
            <p>One physician. Complete care. From a flu to facial rejuvenation.</p>
          </div>

          <div className="services-grid stagger-children">
            <div className="service-card fade-up">
              <div className="service-icon"><Stethoscope size={28} /></div>
              <h3>VIP Urgent Care</h3>
              <p>
                Walk in sick. Walk out treated. No 4-hour waits, no crowded rooms.
                Flu, infections, injuries, and illnesses — handled with the attention
                you'd expect from a private physician.
              </p>
              <a href={BOOKING_URL} className="service-link" target="_blank" rel="noopener noreferrer">
                Book Same-Day Visit <ChevronRight size={16} />
              </a>
            </div>

            <div className="service-card fade-up">
              <div className="service-icon"><HeartPulse size={28} /></div>
              <h3>Acute Care Services</h3>
              <p>
                30 years in emergency and family medicine means Dr. Farah diagnoses
                and treats conditions other urgent cares send to the ER — saving you
                thousands of dollars and hours of waiting.
              </p>
              <a href={BOOKING_URL} className="service-link" target="_blank" rel="noopener noreferrer">
                Book Same-Day Visit <ChevronRight size={16} />
              </a>
            </div>

            <div className="service-card fade-up">
              <div className="service-icon"><Sparkles size={28} /></div>
              <h3>PRP & Rejuvenation</h3>
              <p>
                Turn back the clock with your body's own healing power. PRP, PRF,
                and exosome therapy for skin rejuvenation, hair restoration, and
                joint pain — no surgery, no synthetic chemicals.
              </p>
              <a href={BOOKING_URL} className="service-link" target="_blank" rel="noopener noreferrer">
                Book a Free Consultation <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT =====
        Psychology: Authority bias (credentials), liking/similarity (personal story).
        Psychology: Pratfall effect — "not the fastest" admission increases trust.
        CRO: Credentials near CTA to build trust at decision point.
      */}
      <section className="section section-alt" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image fade-up">
              <div className="about-image-accent" />
              <img
                src="https://drfarahvipurgentcare.com/wp-content/uploads/2025/02/drfarah.webp"
                alt="Dr. Farah Eskandari treating a patient"
              />
            </div>

            <div className="about-content fade-up">
              <div className="section-label">Meet Dr. Farah</div>
              <h2>A Doctor Who Calls You Back</h2>
              <p>
                Dr. Farah Eskandari earned her MD in 1991 and completed her residency
                at the University of Texas Houston. She has practiced emergency medicine,
                family medicine, and clinical research for over three decades.
              </p>
              <p>
                Her patients will tell you: visits take longer here than at a chain
                urgent care. That's on purpose. Dr. Farah <em>listens</em>. She takes
                the time to understand what's going on. And she follows up after your
                visit to make sure you're feeling better.
              </p>
              <p>
                Beyond urgent care, Dr. Farah pairs regenerative therapies with
                holistic practices like meditation and yoga — because true healing
                addresses the whole person, not just the symptoms.
              </p>

              {/* CRO: Trust signals clustered together for maximum authority effect */}
              <div className="credentials">
                <span className="credential"><CheckCircle size={14} /> Board Certified (ABFM)</span>
                <span className="credential"><CheckCircle size={14} /> Licensed in CA & TX</span>
                <span className="credential"><CheckCircle size={14} /> American Medical Association</span>
                <span className="credential"><CheckCircle size={14} /> ACFP Member</span>
                <span className="credential"><CheckCircle size={14} /> American Academy of Aesthetic Medicine</span>
              </div>

              <a href={BOOKING_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
                <Calendar size={18} /> <span>Schedule Your Visit</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIALTIES =====
        Copywriting: One idea per item. Specific outcomes, not vague claims.
      */}
      <section className="section" id="specialties">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Areas of Expertise</div>
            <h2>More Than Urgent Care</h2>
            <p>Medical services most urgent cares can't offer — all under one roof.</p>
          </div>

          <div className="specialties-grid stagger-children">
            {[
              { title: 'Family Medicine', desc: 'Complete care for patients of all ages — from children to seniors' },
              { title: 'Emergency Medicine', desc: 'ER-level expertise without the ER wait or the ER bill' },
              { title: 'PRP / PRF Therapy', desc: 'Your own platelets used to rejuvenate skin, restore hair, and heal joints' },
              { title: 'Exosome Therapy', desc: 'Next-generation regenerative treatment for cellular renewal and recovery' },
              { title: 'Stem Cell Therapy', desc: 'Targeted procedures for tissue regeneration and accelerated healing' },
              { title: 'IV Hydration & Vitamins', desc: 'Custom vitamin infusions — feel better in 30 minutes, not 3 days' },
              { title: 'Holistic Wellness', desc: 'Meditation, yoga, and mind-body practices woven into your care plan' },
              { title: 'Clinical Research', desc: 'Active contributions to oncology and treatment effectiveness studies' },
            ].map((item) => (
              <div className="specialty-item fade-up" key={item.title}>
                <div className="specialty-dot" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS =====
        CRO: Social proof near consideration phase. Real names, real dates, Google attribution.
        Psychology: Bandwagon effect, availability heuristic, authority.
        Copywriting: Let customer language do the selling.
      */}
      <section className="section section-dark" id="reviews">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">
              5.0 Stars Across Every Google Review
            </div>
            <h2>Patients Say It Better Than We Can</h2>
            <p>Real reviews from real patients — unedited.</p>
          </div>

          <div className="testimonials-grid stagger-children">
            {[
              {
                text: "Dr. Farah is amazing. She is not only good at what she does but also responsive and attentive. I highly recommend her.",
                name: "Anita Chang",
                date: "February 2025"
              },
              {
                text: "Very knowledgeable and gentle and had me feeling better from a horrible flu within 8 hours. Will definitely be seeing her again. Her office staff was so welcoming and kind.",
                name: "Angela Kavanaugh",
                date: "February 2025"
              },
              {
                text: "I was totally impressed with the VIP medical treatment. Her bedside manner was impeccable. She was sensitive to my concerns and extremely knowledgeable about all the new technology.",
                name: "Marie Cohen",
                date: "February 2025"
              },
              {
                text: "Dr. Farah is compassionate, knowledgeable, and takes the time to address all concerns thoroughly. My go-to for immediate, personalized medical care.",
                name: "P K",
                date: "February 2025"
              },
              {
                text: "Dr. Farah took the time to understand my sciatica issue. It was fast, easy and I can walk again. She later called and followed up. Cannot ask for a better doctor.",
                name: "Educational Robotics",
                date: "May 2024"
              },
              {
                text: "I tried the IV Hydration and IV Cocktails, and I felt so much better right away. I highly recommend Dr. Farah and the team at VIP Urgent Care.",
                name: "Samira Rasaei",
                date: "February 2025"
              },
            ].map((review, i) => (
              <div className="testimonial-card fade-up" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <blockquote>"{review.text}"</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {review.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div>
                    <div className="testimonial-name">{review.name}</div>
                    <div className="testimonial-source">Google Review — {review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSURANCE / OBJECTION HANDLING =====
        CRO: Address #1 objection ("Is this covered by insurance?") directly.
        Psychology: Regret aversion — remove the "what if" around cost.
      */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Insurance Accepted</div>
            <h2>Yes, We Take Your Insurance</h2>
            <p>Most major plans accepted. Call to confirm your coverage before you come in.</p>
          </div>

          <div className="insurance-logos fade-up">
            <span>Aetna</span>
            <span>Blue Cross</span>
            <span>Cigna</span>
            <span>United Healthcare</span>
            <span>Medicare</span>
            <span>Anthem</span>
          </div>

          <div className="fade-up" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href={PHONE_HREF} className="btn-primary">
              <Phone size={18} /> <span>Verify My Coverage</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ / OBJECTION HANDLING =====
        CRO: Handle remaining objections. Reduce friction.
        Psychology: Status-quo bias (make switching easy), regret aversion.
      */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Common Questions</div>
            <h2>What to Expect</h2>
          </div>

          <div className="faq-grid fade-up">
            {[
              {
                q: "Do I need an appointment?",
                a: "No. We welcome walk-ins and scheduled appointments. Booking ahead guarantees minimal wait time."
              },
              {
                q: "How quickly will I be seen?",
                a: "Most patients are seen promptly. We don't run an assembly line — you won't sit in a waiting room for hours."
              },
              {
                q: "What can you treat that other urgent cares can't?",
                a: "With 30+ years in emergency and family medicine, Dr. Farah handles conditions many urgent cares send to the ER. She also offers PRP, exosome therapy, IV hydration, and regenerative treatments — all in-office."
              },
              {
                q: "Will Dr. Farah be the one treating me?",
                a: "Yes. You see Dr. Farah personally, every visit. No rotating staff doctors."
              },
              {
                q: "Is PRP therapy safe?",
                a: "PRP uses your own blood platelets — no synthetic chemicals, no foreign substances. Dr. Farah is a member of the American Academy of Aesthetic Medicine with extensive training in regenerative therapies."
              },
              {
                q: "Do you follow up after visits?",
                a: "Yes. Dr. Farah personally calls to check on your recovery. Multiple patients mention this in their reviews — it's rare, and it's intentional."
              },
            ].map((item, i) => (
              <details className="faq-item" key={i}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA =====
        CRO: Recap value, repeat CTA, risk reversal.
        Psychology: Loss aversion ("Every day you wait"), commitment (small first step).
        Copywriting: Specific CTA > generic. Loss framing in headline.
      */}
      <section className="cta-section">
        <div className="container">
          <div className="fade-up">
          <h2>Every Day You Wait Is Another Day You Don't Have To</h2>
          <p>
            Whether you need urgent care right now or want to explore rejuvenation
            treatments, Dr. Farah is ready to see you. Board certified. 30+ years of
            experience. Most insurance accepted.
          </p>
          <div className="cta-actions">
            <a href={BOOKING_URL} className="btn-white" target="_blank" rel="noopener noreferrer">
              <Calendar size={18} /> <span>Book Your Same-Day Visit</span>
            </a>
            <a href={PHONE_HREF} className="btn-outline-white">
              <Phone size={18} /> <span>Call Now: {PHONE}</span>
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-mark">FE</div>
                <div className="logo-text">
                  <span className="logo-name">Dr. Farah Eskandari</span>
                  <span className="logo-title">Board-Certified Physician</span>
                </div>
              </div>
              <p>
                VIP urgent care and regenerative medicine in Beverly Hills.
                30+ years of experience. 5.0 Google rating. Most insurance accepted.
              </p>
            </div>

            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services">VIP Urgent Care</a></li>
                <li><a href="#services">Acute Care</a></li>
                <li><a href="#services">PRP / PRF Therapy</a></li>
                <li><a href="#services">Exosome Therapy</a></li>
                <li><a href="#services">IV Hydration</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Dr. Farah</a></li>
                <li><a href="#specialties">Specialties</a></li>
                <li><a href="#reviews">Patient Reviews</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Online</a></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul className="footer-links footer-contact">
                <li><Phone size={14} /> <a href={PHONE_HREF}>{PHONE}</a></li>
                <li><Mail size={14} /> Efax: 707-261-0739</li>
                <li><MapPin size={14} /> Beverly Hills, CA</li>
                <li><Clock size={14} /> Call for hours</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Dr. Farah Eskandari, MD. All rights reserved.</span>
            <div className="footer-social">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== SCHEMA MARKUP =====
        Schema: MedicalBusiness + Physician + FAQPage + Review for rich results.
        Enhanced with: image, description, openingHours, sameAs, paymentAccepted,
        individual Review entries with actual review content.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalBusiness",
            "name": "Dr. Farah VIP Urgent Care",
            "description": "Board-certified physician offering VIP urgent care and regenerative medicine in Beverly Hills. 30+ years of experience in emergency and family medicine. Same-day appointments available.",
            "url": "https://drfarah.md",
            "telephone": "+1-310-467-0101",
            "image": "https://drfarahvipurgentcare.com/wp-content/uploads/2025/02/dr-farah-about.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Beverly Hills",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.0736",
              "longitude": "-118.4004"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "20",
              "bestRating": "5"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Anita Chang" },
                "datePublished": "2025-02",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Dr. Farah is amazing. She is not only good at what she does but also responsive and attentive. I highly recommend her."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Angela Kavanaugh" },
                "datePublished": "2025-02",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Very knowledgeable and gentle and had me feeling better from a horrible flu within 8 hours. Will definitely be seeing her again."
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Marie Cohen" },
                "datePublished": "2025-02",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Her bedside manner was impeccable. She was sensitive to my concerns and extremely knowledgeable about all the new technology."
              }
            ],
            "medicalSpecialty": [
              "Family Medicine",
              "Emergency Medicine",
              "Regenerative Medicine"
            ],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
            "currenciesAccepted": "USD",
            "sameAs": [
              "https://www.instagram.com/drfaraheskandari/",
              "https://www.linkedin.com/in/farahnaz-eskandari-846aa454"
            ]
          },
          {
            "@type": "Physician",
            "name": "Dr. Farah Eskandari",
            "description": "Board-certified physician with 30+ years of experience in emergency medicine, family medicine, and regenerative therapies.",
            "image": "https://drfarahvipurgentcare.com/wp-content/uploads/2025/02/drfarah.webp",
            "medicalSpecialty": ["Family Medicine", "Emergency Medicine", "Regenerative Medicine"],
            "memberOf": [
              { "@type": "Organization", "name": "American Medical Association" },
              { "@type": "Organization", "name": "American College of Family Practice" },
              { "@type": "Organization", "name": "American Academy of Aesthetic Medicine" }
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "University of Texas Houston"
            },
            "knowsAbout": ["PRP Therapy", "PRF Therapy", "Exosome Therapy", "Stem Cell Therapy", "IV Hydration"],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Board Certification",
              "recognizedBy": {
                "@type": "Organization",
                "name": "American Board of Family Medicine"
              }
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need an appointment at Dr. Farah VIP Urgent Care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We welcome both walk-ins and scheduled appointments. Booking ahead guarantees minimal wait time."
                }
              },
              {
                "@type": "Question",
                "name": "What insurance does Dr. Farah VIP Urgent Care accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept most major insurance plans including Aetna, Blue Cross, Cigna, United Healthcare, Medicare, and Anthem."
                }
              },
              {
                "@type": "Question",
                "name": "Is PRP therapy safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PRP uses your own blood platelets — no synthetic chemicals or foreign substances. Dr. Farah is a member of the American Academy of Aesthetic Medicine with extensive training in regenerative therapies."
                }
              },
              {
                "@type": "Question",
                "name": "Will Dr. Farah be the one treating me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You see Dr. Farah personally, every visit. No rotating staff doctors."
                }
              },
              {
                "@type": "Question",
                "name": "Does Dr. Farah follow up after visits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Dr. Farah personally calls to check on your recovery. Multiple patients mention this in their reviews."
                }
              }
            ]
          }
        ]
      })}} />
    </>
  )
}

export default App
