export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Services</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Office Location
            </h2>
            <p className="text-muted-foreground mb-2">Dubai Office:</p>
            <address className="text-muted-foreground not-italic">
              Dubai Internet City
              <br />
              Building 1, Office 101
              <br />
              Dubai, United Arab Emirates
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Contact Information
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: contact@quantikr.com</p>
              <p>Phone: +971 4 123 4567</p>
              <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM GST</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
