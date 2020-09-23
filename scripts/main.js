import {OfficerList} from "./officers/OfficerList.js"
import { showSuspectsBtn } from "./criminals/CriminalList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { saveNote } from "./notes/NoteProvider.js";
import { NoteList } from "./notes/NoteList.js";
import { WitnessList } from "./witness/WitnessList.js";
import { DisplayFacilitiesButton } from "./facility/FacilityProvider.js";

import "./facility/FacilityList.js"
// OfficerList();
NoteForm();
ConvictionSelect();
OfficerSelect();
// NoteList();
showSuspectsBtn()
DisplayFacilitiesButton()