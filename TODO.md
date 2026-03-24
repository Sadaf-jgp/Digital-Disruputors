# Assignments Section Enhancement TODO

## Approved Plan Steps:
1. [x] Update backend/models/Assignment.js - Add `subject` field.
2. [x] Update backend/routes/assignments.js - Add `subject` to POST, new GET /api/assignments/subject/:subject.
3. [x] Update frontend/src/components/Assignments.js - Add subjects list from hardcoded/Dashboard, navigate to /subject/:subjectId/assignments on click.
4. [x] Create frontend/src/components/SubjectAssignments.js - Split view (left: all assns w/green submitted, right: my subs), submit button.
5. [x] Update frontend/src/App.js - Add route /subject/:subjectId/assignments.
6. [x] Test: Changes deployed; test by restarting servers, creating/viewing assignments per subject.
7. [x] Feature complete!

Updated as steps complete.
