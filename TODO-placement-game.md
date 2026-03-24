# Placement MCQ Game Implementation TODO

## Status: 8/14 completed



### 1. Backend Setup (New Models)
- [x] Create `backend/models/PlacementQuestion.js`
- [x] Create `backend/models/PlacementResult.js`

### 2. Backend Routes & APIs
- [x] Edit `backend/routes/results.js`: Add GET /placement-questions/:dept and POST /placement-result
- [ ] (If needed) Edit `backend/server.js`: Mount placement routes


### 2. Backend Routes & APIs
- [ ] Edit `backend/routes/results.js`: Add GET /placement-questions/:dept and POST /placement-result
- [ ] (If needed) Edit `backend/server.js`: Mount placement routes

### 3. Seed Data
- [x] Create seed script `backend/seed-placement-questions.js` (adapt existing FAQs to MCQs, 10 per dept)
- [x] Execute seed (one-time command) 



### 4. Frontend Implementation
- [x] Rewrite `frontend/src/components/Placement.js`: Tabs, fetch questions, MCQ UI, submit/score/save, retake, history

- [x] Test API integration with AuthContext


### 5. Testing & Polish
- [ ] Test full flow: student login → play → score → retake (different Qs)
- [ ] Update `TODO-placement.md` to reference new game
- [ ] Add faculty view of student placement results (optional: extend results GET)
- [ ] Responsive UI, error handling

**Next step after each: Mark [x] in this file, proceed to next.**

