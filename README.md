This is a minimum reproducible example for testing nextJs router behavior.

# Scenarios

## Scenarios1: with force-dynamic and generateStaticParams

#### Dev: it will throw error

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000/en-hk` in your browser
5. Click the button <= it will throw error, [Error: Dynamic server usage: force-dynamic]

#### Build: it works

1. Clone the repo
2. Run `npm install`
3. Run `npm run build`
4. Run `npm run start`
5. Open `http://localhost:3000/en-hk` in your browser
6. Click the button <= it works

## Scenarios2: without force-dynamic and with generateStaticParams

#### Dev: it doesn't work, empty searchParams

1. Similar to Scenarios1, but remove `force-dynamic` in `/src/pages/[lang]/page.tsx`
2. Click the button <= searchParams in server log is empty

#### Build: it doesn't work, no log

1. Similar to Scenarios1, but remove `force-dynamic` in `/src/pages/[lang]/page.tsx`
2. Click the button <= no server log, I think it's because the page is static

## Scenarios3: without force-dynamic and without generateStaticParams

It works
