```

src
 ┣ components
 ┃ ┣ accountDashboardComponents
 ┃ ┃ ┗ accountEditModal.tsx
 ┃ ┣ caregiverDashboard
 ┃ ┃ ┣ customDashboardComponents
 ┃ ┃ ┃ ┣ historyComponents
 ┃ ┃ ┃ ┃ ┣ historyModal.tsx
 ┃ ┃ ┃ ┃ ┗ historyOverview.tsx
 ┃ ┃ ┃ ┣ scheduledSessionsOverview
 ┃ ┃ ┃ ┃ ┣ scheduledSessionModal.tsx
 ┃ ┃ ┃ ┃ ┗ scheduledSessionOverviewOne.tsx
 ┃ ┃ ┃ ┣ sessionDetailCards
 ┃ ┃ ┃ ┃ ┣ demoSessionDetailsOne.tsx
 ┃ ┃ ┃ ┃ ┣ demoSessionDetailsThree.tsx
 ┃ ┃ ┃ ┃ ┗ demoSessionDetailsTwo.tsx
 ┃ ┃ ┃ ┣ sessionOverview
 ┃ ┃ ┃ ┃ ┣ demoSessionOverviewOne.tsx
 ┃ ┃ ┃ ┃ ┣ demoSessionOverviewThree.tsx
 ┃ ┃ ┃ ┃ ┗ demoSessionOverviewTwo.tsx
 ┃ ┃ ┃ ┣ findPatientTab.tsx
 ┃ ┃ ┃ ┣ historyTab.tsx
 ┃ ┃ ┃ ┣ mobileFindSessionModal.tsx
 ┃ ┃ ┃ ┣ scheduledSessionsTab.tsx
 ┃ ┃ ┃ ┣ searchEngine.tsx
 ┃ ┃ ┃ ┗ tabsEngine.tsx
 ┃ ┃ ┗ caregiverDashboardCustom.tsx
 ┃ ┣ helpDashboardComponents
 ┃ ┃ ┣ contactUs.tsx
 ┃ ┃ ┣ forums.tsx
 ┃ ┃ ┗ supportDocumentation.tsx
 ┃ ┣ layout
 ┃ ┃ ┣ header.tsx
 ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┗ sideNav.tsx
 ┃ ┣ messagesCustomDashboardComponents
 ┃ ┃ ┣ demoConversation.tsx
 ┃ ┃ ┣ demoConversationTwo.tsx
 ┃ ┃ ┣ messageDashboardConnectionCard.tsx
 ┃ ┃ ┗ messagesPageEngine.tsx
 ┃ ┣ helpDashboard.tsx
 ┃ ┣ messagesDashboard.tsx
 ┃ ┗ themeManager.tsx
 ┣ env
 ┃ ┣ client.mjs
 ┃ ┣ schema.mjs
 ┃ ┗ server.mjs
 ┣ pages
 ┃ ┣ api
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┗ [...nextauth].ts
 ┃ ┃ ┣ trpc
 ┃ ┃ ┃ ┗ [trpc].ts
 ┃ ┃ ┣ examples.ts
 ┃ ┃ ┗ restricted.ts
 ┃ ┣ _app.tsx
 ┃ ┣ account.tsx
 ┃ ┣ caregiver.tsx
 ┃ ┣ help.tsx
 ┃ ┣ index.tsx
 ┃ ┗ messages.tsx
 ┣ server
 ┃ ┣ common
 ┃ ┃ ┗ get-server-auth-session.ts
 ┃ ┣ db
 ┃ ┃ ┗ client.ts
 ┃ ┗ trpc
 ┃ ┃ ┣ router
 ┃ ┃ ┃ ┣ _app.ts
 ┃ ┃ ┃ ┣ auth.ts
 ┃ ┃ ┃ ┗ example.ts
 ┃ ┃ ┣ context.ts
 ┃ ┃ ┗ trpc.ts
 ┣ styles
 ┃ ┗ globals.css
 ┣ types
 ┃ ┗ next-auth.d.ts
 ┗ utils
 ┃ ┗ trpc.ts
 
 ```
