import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeanCanvasPage() {
  const canvasData = {
    problem: ["High customer churn", "Inefficient onboarding", "Lack of product visibility"],
    solution: ["Automated onboarding flow", "In-app guidance", "Analytics dashboard"],
    keyMetrics: ["Monthly Active Users", "Customer Lifetime Value", "Net Promoter Score"],
    uniqueValue: "The only platform that combines product analytics with automated customer success workflows",
    unfairAdvantage: ["Proprietary ML algorithms", "Strategic partnerships", "First-mover advantage"],
    channels: ["Content marketing", "Product-led growth", "Partner network"],
    customerSegments: ["B2B SaaS companies", "Product teams", "Customer success managers"],
    costStructure: ["Engineering team", "Cloud infrastructure", "Sales & marketing"],
    revenueStreams: ["Monthly subscriptions", "Enterprise licenses", "Professional services"],
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="Lean Canvas"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {/* Row 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.problem.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.solution.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.keyMetrics.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Row 2 */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Unique Value Proposition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{canvasData.uniqueValue}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Unfair Advantage</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.unfairAdvantage.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Row 3 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.channels.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Customer Segments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.customerSegments.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Row 4 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Cost Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.costStructure.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Revenue Streams</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {canvasData.revenueStreams.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}
