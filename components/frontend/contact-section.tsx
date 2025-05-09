import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare, MessageCircle, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Still Need Help?</h2>
        <p className="text-muted-foreground mt-1">Contact our support team through one of these channels</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email & Phone Card */}
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2 bg-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Email & Phone</CardTitle>
            <CardDescription>Get in touch via email or phone</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <div className="text-sm font-medium mb-1">Email Us</div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="mailto:support@schoolsystem.com" className="text-primary hover:underline">
                  support@schoolsystem.com
                </a>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Call Us</div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href="tel:+15551234567" className="hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Available Monday-Friday, 8AM-5PM</div>
            </div>
            <Button className="w-full mt-4 group">
              <span>Contact Support</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Live Chat Card */}
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2 bg-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Chat with our support team</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <div className="text-sm font-medium mb-1">Chat Hours</div>
              <div className="text-muted-foreground">School days: 7AM-4PM</div>
              <div className="text-muted-foreground">Weekends: 9AM-1PM</div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Average Response Time</div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>Under 5 minutes</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Our technical support team is ready to help you with any questions about using the school management
              system.
            </div>
            <Button variant="outline" className="w-full mt-4 group">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Start Live Chat</span>
            </Button>
          </CardContent>
        </Card>

        {/* WhatsApp Card */}
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="pb-2 bg-primary/5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-4">
              <MessageCircle className="h-6 w-6 text-green-500" />
            </div>
            <CardTitle>WhatsApp</CardTitle>
            <CardDescription>Connect with us on WhatsApp</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <div className="text-sm font-medium mb-1">WhatsApp Number</div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>+1 (555) 987-6543</span>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Available For</div>
              <div className="text-muted-foreground">Quick questions, urgent issues, and mobile support</div>
            </div>
            <div className="text-sm text-muted-foreground">
              Prefer to chat on WhatsApp? Our support team is available to assist you through this convenient channel.
            </div>
            <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 group">
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

