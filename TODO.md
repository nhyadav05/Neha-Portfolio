# Dynamic Experience Implementation Plan

## Information Gathered:
- Current experience dates are hardcoded as static strings in `src/data/portfolioData.ts`
- Example: `date: "2025 Jun – Present"`
- The `Experience.tsx` component displays these static dates
- Need to make experience duration calculate automatically

## Plan:

### 1. Update `src/types/index.ts` - ✅ Pending
- Modify the `Experience` interface to use `startDate` and `endDate` fields
- Keep the interface flexible to support dynamic calculation

### 2. Update `src/data/portfolioData.ts` - ✅ Pending
- Change from static date strings to structured date objects
- Use ISO date format (YYYY-MM-DD) for startDate
- Set endDate as null for current positions
- Add a helper function to calculate experience duration
- Format dates dynamically for display

### 3. Update `src/components/Experience.tsx` - ✅ Pending
- Modify the component to use dynamic date calculation
- Display formatted date range (e.g., "Jun 2024 – Jun 2025")
- Show total experience duration (e.g., "1 year")

## Follow-up Steps:
- Test the dynamic calculation
- Verify date formatting looks correct
- Ensure "Present" is shown for current positions

## Files to be edited:
1. `src/types/index.ts`
2. `src/data/portfolioData.ts`
3. `src/components/Experience.tsx`

## Progress:
- [x] Step 1: Update types/index.ts
- [x] Step 2: Update data/portfolioData.ts
- [x] Step 3: Update components/Experience.tsx

