import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 2 });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="relative bg-zinc-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,197,94,0.07),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Reserve Your Experience</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Book a table in seconds. We will confirm your reservation via email.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none ring-amber-300/0 transition focus:ring-2"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none ring-amber-300/0 transition focus:ring-2"
                  placeholder="jane@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/80">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white outline-none ring-amber-300/0 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/80">Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white outline-none ring-amber-300/0 transition focus:ring-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/80">Guests</label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={onChange}
                  className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white outline-none ring-amber-300/0 transition focus:ring-2"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1} className="bg-zinc-900">
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-amber-400 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Reserve Now
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm text-amber-300">
                Thank you! Your reservation request has been received.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Hours & Location</h3>
            <p className="mt-2 text-white/70">123 Aurora Lane, Metropolis</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70 sm:text-base">
              <div>
                <p className="font-medium text-white">Dinner</p>
                <p>Tue–Thu: 5:30–10:00 PM</p>
                <p>Fri–Sat: 5:30–11:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white">Lounge</p>
                <p>Tue–Sat: 4:00–12:00 AM</p>
                <p>Sun–Mon: Closed</p>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-black/40 p-4 ring-1 ring-white/10">
              <p className="text-sm text-white/70">
                For parties of 8+, please email concierge@aurora.restaurant
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
