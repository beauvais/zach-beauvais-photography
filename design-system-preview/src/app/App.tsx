import { useState } from 'react';
import { Button } from './components/Button';
import { Card, CardHeader, CardContent } from './components/Card';
import { Container } from './components/Container';
import { Grid } from './components/Grid';
import { Logo } from './components/Logo';

export default function App() {
  const [activeSection, setActiveSection] = useState('colors');

  const sections = [
    { id: 'colors', label: 'Colours' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'layouts', label: 'Layouts' },
    { id: 'logo', label: 'Logo' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <Container>
          <div className="py-6">
            <div className="flex items-baseline justify-between">
              <div>
                <h1 className="mb-2">Design System</h1>
                <p className="text-muted-foreground">
                  A refined system for visual storytelling
                </p>
              </div>
              <Logo />
            </div>
            <nav className="flex gap-1 mt-8 overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-[var(--radius)] transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      {/* Content */}
      <main className="py-12">
        <Container>
          {/* Colors Section */}
          {activeSection === 'colors' && (
            <div className="space-y-12">
              <div>
                <h2 className="mb-2">Colour Palette</h2>
                <p className="text-muted-foreground mb-8">
                  Warm neutrals with subtle sophistication, designed not to compete with photography
                </p>
                
                <div className="space-y-8">
                  {/* Primary Colors */}
                  <div>
                    <h5 className="mb-4">Primary</h5>
                    <Grid cols={4} gap="md">
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-primary mb-3"></div>
                        <p className="text-sm">Primary</p>
                        <code className="text-xs text-muted-foreground">#2D2621</code>
                      </div>
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-foreground mb-3"></div>
                        <p className="text-sm">Foreground</p>
                        <code className="text-xs text-muted-foreground">#1C1410</code>
                      </div>
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-accent mb-3"></div>
                        <p className="text-sm">Accent</p>
                        <code className="text-xs text-muted-foreground">#E89B6D</code>
                      </div>
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-destructive mb-3"></div>
                        <p className="text-sm">Destructive</p>
                        <code className="text-xs text-muted-foreground">#FF7726</code>
                      </div>
                    </Grid>
                  </div>

                  {/* Neutral Colors */}
                  <div>
                    <h5 className="mb-4">Neutrals</h5>
                    <Grid cols={4} gap="md">
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-background border border-border mb-3"></div>
                        <p className="text-sm">Background</p>
                        <code className="text-xs text-muted-foreground">#FDFCFB</code>
                      </div>
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-card border border-border mb-3"></div>
                        <p className="text-sm">Card</p>
                        <code className="text-xs text-muted-foreground">#FFFFFF</code>
                      </div>
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-secondary mb-3"></div>
                        <p className="text-sm">Secondary</p>
                        <code className="text-xs text-muted-foreground">#F0ECE6</code>
                      </div>
                      <div>
                        <div className="h-24 rounded-[var(--radius-lg)] bg-muted mb-3"></div>
                        <p className="text-sm">Muted</p>
                        <code className="text-xs text-muted-foreground">#F7F4EF</code>
                      </div>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Typography Section */}
          {activeSection === 'typography' && (
            <div className="space-y-12">
              <div>
                <h2 className="mb-2">Typography</h2>
                <p className="text-muted-foreground mb-8">
                  Gill Sans for display, Lora for body—elegant yet refined
                </p>
                
                <div className="space-y-8">
                  <Card variant="bordered" className="p-8">
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <h1>Display Heading</h1>
                        <p className="text-sm text-muted-foreground">Gill Sans Light, 64px</p>
                      </div>
                      <div className="space-y-2">
                        <h2>Primary Heading</h2>
                        <p className="text-sm text-muted-foreground">Gill Sans Light, 48px</p>
                      </div>
                      <div className="space-y-2">
                        <h3>Secondary Heading</h3>
                        <p className="text-sm text-muted-foreground">Gill Sans Regular, 36px</p>
                      </div>
                      <div className="space-y-2">
                        <h4>Tertiary Heading</h4>
                        <p className="text-sm text-muted-foreground">Gill Sans Medium, 24px</p>
                      </div>
                      <div className="space-y-2">
                        <h5>Section Heading</h5>
                        <p className="text-sm text-muted-foreground">Gill Sans Medium, 18px</p>
                      </div>
                      <div className="space-y-2">
                        <h6>Label Heading</h6>
                        <p className="text-sm text-muted-foreground">Gill Sans Semibold, 16px, Uppercase</p>
                      </div>
                      <div className="space-y-2">
                        <p>
                          Body text is set in Lora Regular at 16px with generous line height of 1.7. 
                          This ensures comfortable reading for longer form content about brands, people, 
                          and emotional stories that need space to breathe.
                        </p>
                        <p className="text-sm text-muted-foreground">Lora Regular, 16px, Line height 1.7</p>
                      </div>
                    </div>
                  </Card>

                  <div>
                    <h5 className="mb-4">Type Scale</h5>
                    <Grid cols={2} gap="md">
                      <Card variant="bordered" className="p-6">
                        <p className="text-xs mb-1">Extra Small</p>
                        <code className="text-xs text-muted-foreground">12px / 0.75rem</code>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <p className="text-sm mb-1">Small</p>
                        <code className="text-xs text-muted-foreground">14px / 0.875rem</code>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <p className="text-base mb-1">Base</p>
                        <code className="text-xs text-muted-foreground">16px / 1rem</code>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <p className="text-lg mb-1">Large</p>
                        <code className="text-xs text-muted-foreground">18px / 1.125rem</code>
                      </Card>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Spacing Section */}
          {activeSection === 'spacing' && (
            <div className="space-y-12">
              <div>
                <h2 className="mb-2">Spacing System</h2>
                <p className="text-muted-foreground mb-8">
                  Consistent rhythm with a 4px base unit, from intimate to expansive
                </p>
                
                <div className="space-y-6">
                  {[
                    { name: 'Extra Small', value: '4px', var: '--spacing-xs' },
                    { name: 'Small', value: '8px', var: '--spacing-sm' },
                    { name: 'Medium', value: '16px', var: '--spacing-md' },
                    { name: 'Large', value: '24px', var: '--spacing-lg' },
                    { name: 'Extra Large', value: '32px', var: '--spacing-xl' },
                    { name: '2XL', value: '48px', var: '--spacing-2xl' },
                    { name: '3XL', value: '64px', var: '--spacing-3xl' },
                    { name: '4XL', value: '96px', var: '--spacing-4xl' },
                    { name: '5XL', value: '128px', var: '--spacing-5xl' },
                  ].map((space) => (
                    <Card key={space.var} variant="bordered" className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="mb-1">{space.name}</p>
                          <code className="text-sm text-muted-foreground">{space.value}</code>
                        </div>
                        <div 
                          className="h-12 bg-accent rounded-[var(--radius)]"
                          style={{ width: space.value }}
                        ></div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Buttons Section */}
          {activeSection === 'buttons' && (
            <div className="space-y-12">
              <div>
                <h2 className="mb-2">Buttons</h2>
                <p className="text-muted-foreground mb-8">
                  Purposeful, clear actions with subtle transitions
                </p>
                
                <div className="space-y-10">
                  {/* Variants */}
                  <div>
                    <h5 className="mb-6">Variants</h5>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">Primary Button</Button>
                      <Button variant="secondary">Secondary Button</Button>
                      <Button variant="accent">Accent Button</Button>
                      <Button variant="outline">Outline Button</Button>
                      <Button variant="ghost">Ghost Button</Button>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h5 className="mb-6">Sizes</h5>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  {/* States */}
                  <div>
                    <h5 className="mb-6">States</h5>
                    <div className="flex flex-wrap gap-4">
                      <Button>Default</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>

                  {/* Usage Examples */}
                  <div>
                    <h5 className="mb-6">Usage Examples</h5>
                    <Grid cols={2} gap="lg">
                      <Card variant="elevated" className="p-8">
                        <h4 className="mb-4">Book a Session</h4>
                        <p className="mb-6 text-muted-foreground">
                          Ready to tell your story? Let's create something beautiful together.
                        </p>
                        <div className="flex gap-3">
                          <Button variant="primary">Get Started</Button>
                          <Button variant="outline">View Portfolio</Button>
                        </div>
                      </Card>

                      <Card variant="elevated" className="p-8">
                        <h4 className="mb-4">Newsletter</h4>
                        <p className="mb-6 text-muted-foreground">
                          Stories, insights, and photography tips delivered monthly.
                        </p>
                        <div className="flex gap-3">
                          <Button variant="accent">Subscribe</Button>
                          <Button variant="ghost">Maybe Later</Button>
                        </div>
                      </Card>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layouts Section */}
          {activeSection === 'layouts' && (
            <div className="space-y-12">
              <div>
                <h2 className="mb-2">Layout Components</h2>
                <p className="text-muted-foreground mb-8">
                  Flexible systems for organizing visual narratives
                </p>
                
                <div className="space-y-12">
                  {/* Container */}
                  <div>
                    <h5 className="mb-6">Containers</h5>
                    <div className="space-y-4">
                      <Card variant="bordered" className="p-6">
                        <p className="text-sm mb-1">Small (max-width: 672px)</p>
                        <code className="text-xs text-muted-foreground">size="sm"</code>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <p className="text-sm mb-1">Medium (max-width: 896px)</p>
                        <code className="text-xs text-muted-foreground">size="md"</code>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <p className="text-sm mb-1">Large (max-width: 1152px) — Default</p>
                        <code className="text-xs text-muted-foreground">size="lg"</code>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <p className="text-sm mb-1">Extra Large (max-width: 1280px)</p>
                        <code className="text-xs text-muted-foreground">size="xl"</code>
                      </Card>
                    </div>
                  </div>

                  {/* Grid */}
                  <div>
                    <h5 className="mb-6">Grid System</h5>
                    <div className="space-y-8">
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">2 Column Grid</p>
                        <Grid cols={2} gap="md">
                          {[1, 2].map((i) => (
                            <Card key={i} variant="bordered" className="p-6 h-32 flex items-center justify-center">
                              <p className="text-muted-foreground">Column {i}</p>
                            </Card>
                          ))}
                        </Grid>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-4">3 Column Grid</p>
                        <Grid cols={3} gap="md">
                          {[1, 2, 3].map((i) => (
                            <Card key={i} variant="bordered" className="p-6 h-32 flex items-center justify-center">
                              <p className="text-muted-foreground">Column {i}</p>
                            </Card>
                          ))}
                        </Grid>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-4">4 Column Grid</p>
                        <Grid cols={4} gap="md">
                          {[1, 2, 3, 4].map((i) => (
                            <Card key={i} variant="bordered" className="p-6 h-32 flex items-center justify-center">
                              <p className="text-muted-foreground">Column {i}</p>
                            </Card>
                          ))}
                        </Grid>
                      </div>
                    </div>
                  </div>

                  {/* Cards */}
                  <div>
                    <h5 className="mb-6">Card Variants</h5>
                    <Grid cols={3} gap="lg">
                      <Card variant="default" className="p-6">
                        <h6 className="mb-2">Default Card</h6>
                        <p className="text-sm text-muted-foreground">
                          Clean background, no border
                        </p>
                      </Card>
                      <Card variant="bordered" className="p-6">
                        <h6 className="mb-2">Bordered Card</h6>
                        <p className="text-sm text-muted-foreground">
                          Subtle border definition
                        </p>
                      </Card>
                      <Card variant="elevated" className="p-6">
                        <h6 className="mb-2">Elevated Card</h6>
                        <p className="text-sm text-muted-foreground">
                          Gentle shadow for depth
                        </p>
                      </Card>
                    </Grid>
                  </div>

                  {/* Example Layout */}
                  <div>
                    <h5 className="mb-6">Portfolio Layout Example</h5>
                    <Card variant="elevated" className="overflow-hidden">
                      <div className="h-64 bg-gradient-to-br from-accent/20 to-secondary"></div>
                      <CardHeader>
                        <h3 className="mb-2">Brand Stories</h3>
                        <p className="text-muted-foreground">
                          Authentic moments that capture the essence of your brand's narrative
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-3">
                          <Button variant="primary" size="sm">View Collection</Button>
                          <Button variant="ghost" size="sm">Learn More</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Logo Section */}
          {activeSection === 'logo' && (
            <div className="space-y-12">
              <div>
                <h2 className="mb-2">Logo & Identity</h2>
                <p className="text-muted-foreground mb-8">
                  Simple, intentional marks that honor the craft
                </p>
                
                <div className="space-y-12">
                  {/* Primary Logo */}
                  <div>
                    <h5 className="mb-6">Primary Logo</h5>
                    <Card variant="bordered" className="p-12 flex items-center justify-center">
                      <Logo />
                    </Card>
                  </div>

                  {/* Stacked Logo */}
                  <div>
                    <h5 className="mb-6">Stacked Variation</h5>
                    <Card variant="bordered" className="p-12 flex items-center justify-center">
                      <Logo variant="stacked" />
                    </Card>
                  </div>

                  {/* Minimal Logo */}
                  <div>
                    <h5 className="mb-6">Minimal Mark</h5>
                    <Card variant="bordered" className="p-12 flex items-center justify-center">
                      <Logo variant="minimal" />
                    </Card>
                  </div>

                  {/* Usage Examples */}
                  <div>
                    <h5 className="mb-6">Usage Examples</h5>
                    <Grid cols={2} gap="lg">
                      <Card variant="elevated" className="p-8">
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                          <Logo variant="minimal" />
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">About</Button>
                            <Button variant="ghost" size="sm">Contact</Button>
                          </div>
                        </div>
                        <h4 className="mb-4">Header Navigation</h4>
                        <p className="text-sm text-muted-foreground">
                          The minimal mark works well in compact header spaces
                        </p>
                      </Card>

                      <Card variant="elevated" className="p-8">
                        <Logo variant="stacked" className="mb-8" />
                        <h4 className="mb-4">Footer or Hero Section</h4>
                        <p className="text-sm text-muted-foreground">
                          The stacked version creates visual interest and works beautifully for hero sections
                        </p>
                      </Card>
                    </Grid>
                  </div>

                  {/* Color Variations */}
                  <div>
                    <h5 className="mb-6">On Different Backgrounds</h5>
                    <div className="space-y-4">
                      <Card variant="bordered" className="p-12 bg-background flex items-center justify-center">
                        <Logo />
                      </Card>
                      <Card variant="bordered" className="p-12 bg-primary flex items-center justify-center">
                        <div className="text-primary-foreground">
                          <Logo />
                        </div>
                      </Card>
                      <Card variant="bordered" className="p-12 bg-secondary flex items-center justify-center">
                        <Logo />
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <Container>
          <div className="py-12">
            <p className="text-sm text-muted-foreground text-center">
              A design system for photographers who tell stories with intention
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}