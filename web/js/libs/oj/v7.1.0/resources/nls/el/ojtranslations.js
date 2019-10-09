define({"oj-message":{fatal:"Ανεπανόρθωτο σφάλμα",error:"Σφάλμα",warning:"Προειδοποίηση",info:"Πληροφορίες",confirmation:"Επιβεβαίωση","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Η τιμή δεν έχει την αναμενόμενη μορφή.",detail:"Εισαγάγετε μια τιμή στην αναμενόμενη μορφή.","plural-separator":", ",hint:{summary:"Παράδειγμα: {exampleValue}",detail:"Εισαγάγετε μια τιμή με τη μορφή του εξής παραδείγματος: '{exampleValue}'.","detail-plural":"Εισαγάγετε μια τιμή με τη μορφή των εξής παραδειγμάτων: '{exampleValue}'."},optionHint:{detail:"Μια αποδεκτή τιμή για την επιλογή '{propertyName}' είναι '{propertyValueValid}'.","detail-plural":"Οι αποδεκτές τιμές για την επιλογή '{propertyName}' είναι '{propertyValueValid}'."},optionTypesMismatch:{summary:"Η τιμή για την επιλογή '{requiredPropertyName}' είναι απαραίτητη όταν η επιλογή '{propertyName}' έχει οριστεί ως '{propertyValue}'."},optionTypeInvalid:{summary:"Δεν παρέχεται τιμή με τον αναμενόμενο τύπο για την επιλογή '{propertyName}'."},optionOutOfRange:{summary:"Η τιμή {propertyValue} είναι εκτός εμβέλειας για την επιλογή '{propertyName}'."},optionValueInvalid:{summary:"Καθορίστηκε μη έγκυρη τιμή '{propertyValue}' για την επιλογή '{propertyName}'."},number:{decimalFormatMismatch:{summary:"Η τιμή '{value}' δεν έχει την αναμενόμενη αριθμητική τιμή."},shortLongUnsupportedParse:{summary:'οι μορφές "short" και "long" δεν υποστηρίζονται για την ανάλυση από τον μετατροπέα.',detail:"Αλλάξτε το στοιχείο σε readonly. Τα πεδία readonly δεν καλούν τη λειτουργία ανάλυσης του μετατροπέα."},currencyFormatMismatch:{summary:"Η τιμή '{value}' δεν έχει την αναμενόμενη νομισματική τιμή."},percentFormatMismatch:{summary:"Η τιμή '{value}' δεν έχει την αναμενόμενη ποσοστιαία τιμή."},invalidNumberFormat:{summary:"Η παρεχόμενη τιμή '{value}' δεν είναι έγκυρος αριθμός.",detail:"Καταχωρήστε έγκυρο αριθμό."}},color:{invalidFormat:{summary:"Μη αποδεκτή μορφή χρώματος.",detail:"Προσδιορισμός επιλογής μη αποδεκτής μορφής χρώματος."},invalidSyntax:{summary:"Μη αποδεκτός προσδιορισμός χρώματος.",detail:"Ο προσδιορισμός χρώματος δεν ακολουθεί τον κανόνα CSS3."}},datetime:{datetimeOutOfRange:{summary:"Η τιμή '{value}' είναι εκτός εμβέλειας για την ιδιότητα '{propertyName}'.",detail:"Εισαγάγετε μια τιμή μεταξύ '{minValue}' και '{maxValue}'.",hour:"ώρα",minute:"λεπτό",second:"δευτερόλεπτο",millisec:"χιλιοστό του δευτερολέπτου",month:"μήνας",day:"ημέρα",year:"έτος","month name":"όνομα μήνα",weekday:"καθημερινή"},dateFormatMismatch:{summary:"Η τιμή '{value}' δεν έχει την αναμενόμενη μορφή ημερομηνίας."},invalidTimeZoneID:{summary:"Δόθηκε μη έγκυρο αναγνωριστικό ζώνης ώρας {timeZoneID}."},nonExistingTime:{summary:"Η ώρα εισόδου δεν υπάρχει επειδή συμπίπτει με τη μετάβαση στη θερινή ώρα."},missingTimeZoneData:{summary:'Τα δεδομένα ζώνης ώρας λείπουν. Καλέστε την εντολή "Απαίτηση ojs/ojtimezonedata" για φόρτωση των δεδομένων ζώνης ώρας.'},timeFormatMismatch:{summary:"Η τιμή '{value}' δεν έχει την αναμενόμενη μορφή ώρας."},datetimeFormatMismatch:{summary:"Η τιμή '{value}' δεν έχει την αναμενόμενη μορφή ημερομηνίας και ώρας."},dateToWeekdayMismatch:{summary:"Η ημέρα '{date}' δεν ανήκει στο εύρος '{weekday}'.",detail:"Εισαγάγετε μια εργάσιμη ημέρα που να αντιστοιχεί στην ημερομηνία."},invalidISOString:{invalidRangeSummary:"Η τιμή '{value}' είναι εκτός εμβέλειας για το πεδίο '{propertyName}' στη συμβολοσειρά ISO 8601 '{isoStr}'.",summary:"Το παρεχόμενο '{isoStr}' δεν είναι έγκυρη συμβολοσειρά ISO 8601.",detail:"Καταχωρήστε έγκυρη συμβολοσειρά ISO 8601."}}},"oj-validator":{length:{hint:{min:"Εισαγάγετε {min} ή περισσότερους χαρακτήρες.",max:"Εισαγάγετε {max} ή λιγότερους χαρακτήρες.",inRange:"Εισαγάγετε {min} ή περισσότερους χαρακτήρες χωρίς να υπερβείτε τους {max}.",exact:"Εισαγάγετε {length} χαρακτήρες."},messageDetail:{tooShort:"Εισαγάγετε {min} ή περισσότερους χαρακτήρες χωρίς να υπερβείτε το κατώτερο όριο.",tooLong:"Εισαγάγετε {max} ή λιγότερους χαρακτήρες χωρίς να υπερβείτε το μέγιστο όριο."},messageSummary:{tooShort:"Ο αριθμός των χαρακτήρων είναι υπερβολικά μικρός.",tooLong:"Ο αριθμός των χαρακτήρων είναι υπερβολικά μεγάλος."}},range:{number:{hint:{min:"Εισαγάγετε έναν αριθμό μεγαλύτερο ή ίσο του {min}.",max:"Εισάγετε έναν αριθμό μικρότερο ή ίσο του {max}.",inRange:"Εισαγάγετε έναν αριθμό μεταξύ {min} και {max}.",exact:"Καταχωρήστε τον αριθμό {num}."},messageDetail:{rangeUnderflow:"Ο αριθμός πρέπει να είναι μεγαλύτερος από ή ίσος με {min}.",rangeOverflow:"Ο αριθμός πρέπει να είναι μικρότερος από ή ίσος με {max}.",exact:"Ο αριθμός πρέπει να είναι {num}."},messageSummary:{rangeUnderflow:"Ο αριθμός είναι πολύ μικρός.",rangeOverflow:"Ο αριθμός είναι πολύ μεγάλος."}},datetime:{hint:{min:"Εισαγάγετε μια ημερομηνία και ώρα ίση ή μεταγενέστερη από {min}.",max:"Εισαγάγετε μια ημερομηνία και ώρα ίση ή προγενέστερη από {max}.",inRange:"Εισαγάγετε μια ημερομηνία και ώρα μεταξύ {min} και {max}."},messageDetail:{rangeUnderflow:"Η ημερομηνία και η ώρα θα πρέπει να είναι ίση ή μεταγενέστερη από {min}.",rangeOverflow:"Η ημερομηνία και η ώρα θα πρέπει να είναι ίση ή προγενέστερη από {max}."},messageSummary:{rangeUnderflow:"Η ημερομηνία και η ώρα είναι προγενέστερη από την ελάχιστη ημερομηνία και ώρα.",rangeOverflow:"Η ημερομηνία και η ώρα είναι μεταγενέστερη από τη μέγιστη ημερομηνία και ώρα."}},date:{hint:{min:"Εισάγετε ημερομηνία {min} ή μεταγενέστερη.",max:"Εισάγετε ημερομηνία {max} ή προγενέστερη.",inRange:"Καταχωρίστε μια ημερομηνία μεταξύ {min} και {max}."},messageDetail:{rangeUnderflow:"Η ημερομηνία πρέπει να είναι ίση ή μεταγενέστερη από {min}.",rangeOverflow:"Η ημερομηνία πρέπει να είναι ίση ή προγενέστερη από {max}."},messageSummary:{rangeUnderflow:"Η ημερομηνία είναι προγενέστερη από την ελάχιστη ημερομηνία.",rangeOverflow:"Η ημερομηνία είναι μεταγενέστερη από τη μέγιστη ημερομηνία."}},time:{hint:{min:"Εισάγετε ώρα {min} ή μεταγενέστερη.",max:"Εισάγετε ώρα {max} ή προγενέστερη.",inRange:"Εισαγάγετε ώρα μεταξύ {min} και {max}."},messageDetail:{rangeUnderflow:"Η ώρα πρέπει να είναι ίση ή μεταγενέστερη από {min}.",rangeOverflow:"Η ώρα πρέπει να είναι ίση ή προγενέστερη από {max}."},messageSummary:{rangeUnderflow:"Η ώρα είναι προγενέστερη από την ελάχιστη ημερομηνία.",rangeOverflow:"Η ώρα είναι μεταγενέστερη από τη μέγιστη ημερομηνία."}}},restriction:{date:{messageSummary:"Η ημερομηνία {value} ανήκει σε απενεργοποιημένη καταχώρηση.",messageDetail:"Η ημερομηνία {value} δεν πρέπει να ανήκει σε απενεργοποιημένη καταχώρηση."}},regExp:{summary:"Η μορφή δεν είναι σωστή.",detail:"Η τιμή '{value}' πρέπει να συμφωνεί με το εξής μοτίβο: '{pattern}'."},required:{summary:"Απαιτείται μια τιμή.",detail:"Πρέπει να δώσετε μια τιμή."}},"oj-ojEditableValue":{loading:"Φόρτωση"},"oj-ojInputDate":{done:"Ολοκληρώθηκε",cancel:"Ακύρωση",prevText:"Προηγ.",nextText:"Επόμενο",currentText:"Σήμερα",weekHeader:"Εβδομάδα",tooltipCalendar:"Επιλογή ημερομηνίας.",tooltipCalendarTime:"Επιλογή ημερομηνίας και ώρας.",tooltipCalendarDisabled:"Η δυνατότητα επιλογής ημερομηνίας απενεργοποιήθηκε.",tooltipCalendarTimeDisabled:"Η επιλογή ημερομηνίας και ώρας απενεργοποιήθηκε.",picker:"Επιλογέας",weekText:"Εβδομάδα",datePicker:"Εργαλείο επιλογής ημερομηνίας",inputHelp:"Πατήστε το πλήκτρο κάτω ή πάνω για πρόσβαση στο ημερολόγιο.",inputHelpBoth:"Πατήστε το πλήκτρο κάτω ή πάνω για πρόσβαση στο ημερολόγιο και το συνδυασμό πλήκτρων Shift + πλήκτρο κάτω ή πάνω για πρόσβαση στο αναπτυσσόμενο μενού ώρας.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Ακύρωση",okText:"OK",currentTimeText:"Τώρα",hourWheelLabel:"Ώρα",minuteWheelLabel:"Λεπτό",ampmWheelLabel:"πμμμ",tooltipTime:"Επιλογή ώρας.",tooltipTimeDisabled:"Η δυνατότητα επιλογής ώρας απενεργοποιήθηκε.",inputHelp:"Πατήστε το πλήκτρο κάτω ή πάνω για πρόσβαση στο αναπτυσσόμενο μενού ώρας.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Η τιμή πρέπει να συμφωνεί με το εξής μοτίβο: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Παρουσίαση σελίδας {pageIndex} από {pageCount}",labelAccArrowNextPage:"Επιλέξτε Επόμενο για να εμφανίσετε την επόμενη σελίδα",labelAccArrowPreviousPage:"Επιλέξτε Προηγούμενο για να εμφανίσετε την προηγούμενη σελίδα",tipArrowNextPage:"Επόμενο",tipArrowPreviousPage:"Προηγούμενο"},"oj-ojDataGrid":{accessibleSortAscending:"Ταξινόμηση βάσει {id} σε αύξουσα σειρά",accessibleSortDescending:"Ταξινόμηση βάσει {id} σε φθίνουσα σειρά",accessibleActionableMode:"Είσοδος σε λειτουργία με δυνατότητα ενεργειών.",accessibleNavigationMode:"Μεταβείτε στη λειτουργία πλοήγησης και πατήστε το F2 για είσοδο στη λειτουργία επεξεργασίας ή ενεργειών.",accessibleEditableMode:"Μεταβείτε στη λειτουργία επεξεργασίας και πατήστε το escape για να πλοηγηθείτε εκτός του πλέγματος δεδομένων.",accessibleSummaryExact:"Αυτό είναι ένα πλέγμα δεδομένων με {rownum} γραμμές και {colnum} στήλες",accessibleSummaryEstimate:"Αυτό είναι ένα πλέγμα δεδομένων με άγνωστο αριθμό γραμμών και στηλών",accessibleSummaryExpanded:"Αυτήν τη στιγμή υπάρχουν {num} ανεπτυγμένες γραμμές",accessibleRowExpanded:"Έγινε ανάπτυξη της γραμμής",accessibleRowCollapsed:"Έγινε σύμπτυξη της γραμμής",accessibleRowSelected:"Επιλέχθηκε η γραμμή {row}",accessibleColumnSelected:"Επιλέχθηκε η στήλη {column}",accessibleStateSelected:"επιλεγμένα",accessibleMultiCellSelected:"Επιλέχθηκαν {num} κελιά",accessibleColumnSpanContext:"{extent} πλάτος",accessibleRowSpanContext:"{extent} ύψος",accessibleRowContext:"Γραμμή {index}",accessibleColumnContext:"Στήλη {index}",accessibleRowHeaderContext:"Κεφαλίδα σειράς {index}",accessibleColumnHeaderContext:"Κεφαλίδα στήλης {index}",accessibleRowEndHeaderContext:"Κεφαλίδα λήξης γραμμής {index}",accessibleColumnEndHeaderContext:"Κεφαλίδα λήξης στήλης {index}",accessibleRowHeaderLabelContext:"Ετικέτα κεφαλίδας γραμμής {level}",accessibleColumnHeaderLabelContext:"Ετικέτα κεφαλίδας στήλης {level}",accessibleRowEndHeaderLabelContext:"Ετικέτα κεφαλίδας τέλους γραμμής {level}",accessibleColumnEndHeaderLabelContext:"Ετικέτα κεφαλίδας τέλους στήλης {level}",accessibleLevelContext:"Επίπεδο {level}",accessibleRangeSelectModeOn:"Η λειτουργία προσθήκης του επιλεγμένου εύρους κελιών είναι ενεργή.",accessibleRangeSelectModeOff:"Η λειτουργία προσθήκης του επιλεγμένου εύρους κελιών είναι ανενεργή.",accessibleFirstRow:"Φτάσατε στην πρώτη γραμμή.",accessibleLastRow:"Φτάσατε στην τελευταία γραμμή.",accessibleFirstColumn:"Φτάσατε στην πρώτη στήλη",accessibleLastColumn:"Φτάσατε στην τελευταία στήλη.",accessibleSelectionAffordanceTop:"Δείκτης χειρισμού επιλογής κορυφής.",accessibleSelectionAffordanceBottom:"Δείκτης χειρισμού επιλογής τέλους.",msgFetchingData:"Ανάκτηση δεδομένων...",msgNoData:"Δεν υπάρχουν στοιχεία για εμφάνιση.",labelResize:"Αλλαγή μεγέθους",labelResizeWidth:"Αλλαγή μεγέθους πλάτους",labelResizeHeight:"Αλλαγή μεγέθους ύψους",labelSortRow:"Ταξινόμηση γραμμών",labelSortRowAsc:"Αύξουσα ταξινόμηση γραμμών",labelSortRowDsc:"Φθίνουσα ταξινόμηση γραμμών",labelSortCol:"Ταξινόμηση στήλης",labelSortColAsc:"Αύξουσα ταξινόμηση στηλών",labelSortColDsc:"Φθίνουσα ταξινόμηση στηλών",labelCut:"Αποκοπή",labelPaste:"Επικόλληση",labelEnableNonContiguous:"Ενεργοποίηση μη συνεχούς επιλογής",labelDisableNonContiguous:"Απενεργοποίηση μη συνεχούς επιλογής",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Επίπεδο {level}",accessibleRowDescription:"Επίπεδο {level}, γραμμή {num} από {total}",accessibleRowExpanded:"Έγινε ανάπτυξη της γραμμής",accessibleRowCollapsed:"Έγινε σύμπτυξη της γραμμής",accessibleStateExpanded:"αναπτύχθηκε",accessibleStateCollapsed:"συμπτύχθηκε"},"oj-ojListView":{msgFetchingData:"Ανάκτηση δεδομένων...",msgNoData:"Δεν υπάρχουν στοιχεία για εμφάνιση.",msgItemsAppended:"{count} στοιχεία προσαρτήθηκαν στο τέλος.",indexerCharacters:"Α|Β|Γ|Δ|Ε|Ζ|Η|Θ|Ι|Κ|Λ|Μ|Ν|Ξ|Ο|Π|Ρ|Σ|Τ|Υ|Φ|Χ|Ψ|Ω",accessibleReorderTouchInstructionText:"Κάντε διπλό πάτημα και κρατήστε πατημένο.  Περιμένετε να ακουστεί ο ήχος και σύρετε για αναδιάταξη.",accessibleReorderBeforeItem:"Πριν από το {item}",accessibleReorderAfterItem:"Μετά το {item}",accessibleReorderInsideItem:"Σε {item}",accessibleNavigateSkipItems:"Παράλειψη {numSkip} στοιχείων",labelCut:"Αποκοπή",labelCopy:"Αντιγραφή",labelPaste:"Επικόλληση",labelPasteBefore:"Επικόλληση πριν",labelPasteAfter:"Επικόλληση μετά"},"oj-_ojLabel":{tooltipHelp:"Βοήθεια",tooltipRequired:"Απαιτείται"},"oj-ojLabel":{tooltipHelp:"Βοήθεια",tooltipRequired:"Απαιτείται"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Μείωση",tooltipIncrement:"Αύξηση"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Δείκτης χειρισμού επιλογής κορυφής",labelAccSelectionAffordanceBottom:"Δείκτης χειρισμού επιλογής τέλους",labelEnableNonContiguousSelection:"Ενεργοποίηση μη συνεχούς επιλογής",labelDisableNonContiguousSelection:"Απενεργοποίηση μη συνεχούς επιλογής",labelResize:"Αλλαγή μεγέθους",labelResizePopupSubmit:"OK",labelResizePopupSpinner:"Αναπροσαρμογή μεγέθους στήλης",labelSelectRow:"Επιλογή γραμμής",labelEditRow:"Επεξεργασία γραμμής",labelSelectAndEditRow:"Επιλογή και επεξεργασία γραμμής",labelSelectColumn:"Επιλογή στήλης",labelSort:"Ταξινόμηση",labelSortAsc:"Αύξουσα ταξινόμηση",labelSortDsc:"Φθίνουσα ταξινόμηση",msgFetchingData:"Ανάκτηση δεδομένων...",msgNoData:"Δεν υπάρχουν δεδομένα για εμφάνιση.",msgInitializing:"Προετοιμασία...",msgColumnResizeWidthValidation:"Η τιμή πλάτους πρέπει να είναι ακέραιος αριθμός.",msgScrollPolicyMaxCountSummary:"Έγινε υπέρβαση του μέγιστου ορίου σειρών για κύλιση σε πίνακα.",msgScrollPolicyMaxCountDetail:"Επαναλάβετε τη φόρτωση με μικρότερο σύνολο δεδομένων.",msgStatusSortAscending:"Ταξινόμηση βάσει {0} σε αύξουσα σειρά.",msgStatusSortDescending:"Ταξινόμηση βάσει {0} σε φθίνουσα σειρά."},"oj-ojTabs":{labelCut:"Αποκοπή",labelPasteBefore:"Επικόλληση πριν",labelPasteAfter:"Επικόλληση μετά",labelRemove:"Κατάργηση",labelReorder:" \tΑναδιάταξη",removeCueText:"Με δυνατότητα κατάργησης"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Πεδίο αναζήτησης",noMatchesFound:"Δεν βρέθηκαν αποτελέσματα.",oneMatchesFound:"Βρέθηκε ένα αποτέλεσμα",moreMatchesFound:"Βρέθηκαν {num} αποτελέσματα",filterFurther:"Περισσότερα διαθέσιμα αποτελέσματα. Φιλτράρετέ τα περαιτέρω."},"oj-ojSwitch":{SwitchON:"Ενεργοποιημένο",SwitchOFF:"Απενεργοποιημένο"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Δεν βρέθηκαν αποτελέσματα.",oneMatchesFound:"Βρέθηκε ένα αποτέλεσμα",moreMatchesFound:"Βρέθηκαν {num} αποτελέσματα",filterFurther:"Περισσότερα διαθέσιμα αποτελέσματα. Φιλτράρετέ τα περαιτέρω."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Δεν βρέθηκαν αποτελέσματα.",oneMatchesFound:"Βρέθηκε ένα αποτέλεσμα",moreMatchesFound:"Βρέθηκαν {num} αποτελέσματα"},"oj-ojTree":{stateLoading:"Φόρτωση...",labelNewNode:"Νέος κόμβος",labelMultiSelection:"Πολλαπλή επιλογή",labelEdit:"Επεξεργασία",labelCreate:"Δημιουργία",labelCut:"Αποκοπή",labelCopy:"Αντιγραφή",labelPaste:"Επικόλληση",labelPasteAfter:"Επικόλληση μετά",labelPasteBefore:"Επικόλληση πριν",labelRemove:"Κατάργηση",labelRename:"Μετονομασία",labelNoData:"Δεν υπάρχουν δεδομένα"},"oj-ojPagingControl":{labelAccPaging:"Σελιδοποίηση",labelAccPageNumber:"Φορτώθηκε το περιεχόμενο της σελίδας {pageNum}",labelAccNavFirstPage:"Πρώτη σελίδα",labelAccNavLastPage:"Τελευταία σελίδα",labelAccNavNextPage:"Επόμενη σελίδα",labelAccNavPreviousPage:"Προηγούμενη σελίδα",labelAccNavPage:"Σελίδα",labelLoadMore:"Εμφάνιση περισσότερων...",labelLoadMoreMaxRows:"Συμπληρώθηκε το μέγιστο όριο των {maxRows} γραμμών",labelNavInputPage:"Σελίδα",labelNavInputPageMax:"από {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} από {pageMax} στοιχεία",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} από τουλάχιστον {pageMax} στοιχεία",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} από περίπου {pageMax} στοιχεία",msgItemRangeNoTotal:"{pageFrom}-{pageTo} στοιχεία",fullMsgItem:"{pageTo} από {pageMax} στοιχεία",fullMsgItemAtLeast:"{pageTo} από τουλάχιστον {pageMax} στοιχεία",fullMsgItemApprox:"{pageTo} από περίπου {pageMax} στοιχεία",msgItemNoTotal:"{pageTo} στοιχεία",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"από",msgItemRangeOfAtLeast:"τουλάχιστον",msgItemRangeOfApprox:"κατά προσέγγιση",msgItemRangeItems:"Στοιχεία",tipNavInputPage:"Μετάβαση στη σελίδα",tipNavPageLink:"Μετάβαση στη σελίδα {pageNum}",tipNavNextPage:"Επόμενο",tipNavPreviousPage:"Προηγούμενο",tipNavFirstPage:"Πρώτο",tipNavLastPage:"Τελευταίο",pageInvalid:{summary:"Η τιμή σελίδας που καταχωρίστηκε δεν είναι έγκυρη.",detail:"Καταχωρίστε μια τιμή μεγαλύτερη του 0."},maxPageLinksInvalid:{summary:"Η τιμή για maxPageLinks δεν είναι έγκυρη.",detail:"Καταχωρίστε μια τιμή μεγαλύτερη του 4."}},"oj-ojMasonryLayout":{labelCut:"Αποκοπή",labelPasteBefore:"Επικόλληση πριν",labelPasteAfter:"Επικόλληση μετά"},"oj-panel":{labelAccButtonExpand:"Ανάπτυξη",labelAccButtonCollapse:"Σύμπτυξη",labelAccButtonRemove:"Κατάργηση",labelAccFlipForward:"Αναστροφή προς τα εμπρός",labelAccFlipBack:"Αναστροφή προς τα πίσω",tipDragToReorder:"Σύρετε για αναδιάταξη",labelAccDragToReorder:"Σύρετε για αναδιάταξη, διαθέσιμο μενού περιβάλλοντος"},"oj-ojChart":{labelDefaultGroupName:"Ομάδα {0}",labelSeries:"Σειρές",labelGroup:"Ομάδα",labelDate:"Ημερομηνία",labelValue:"Τιμή",labelTargetValue:"Προορισμός",labelX:"X",labelY:"Υ",labelZ:"Z",labelPercentage:"Ποσοστό",labelLow:"Χαμηλό",labelHigh:"Υψηλό",labelOpen:"Άνοιγμα",labelClose:"Κλείσιμο",labelVolume:"Όγκος",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Ελάχ.",labelMax:"Μέγ.",labelOther:"Άλλο",tooltipPan:"Πανοραμική απεικόνιση",tooltipSelect:"Επιλογή κυλιόμενου μηνύματος",tooltipZoom:"Μεγέθυνση κυλιόμενου μηνύματος",componentName:"Γράφημα"},"oj-dvtBaseGauge":{componentName:"Μετρητής"},"oj-ojDiagram":{promotedLink:"{0} δεσμός",promotedLinks:"{0} δεσμοί",promotedLinkAriaDesc:"Έμμεσο",componentName:"Διάγραμμα"},"oj-ojGantt":{componentName:"Γράφημα Gantt ",accessibleDurationDays:"{0} ημέρες",accessibleDurationHours:"{0} ώρες",accessibleTaskInfo:"Η ώρα έναρξης είναι {0}, η ώρα λήξης είναι {1}, η διάρκεια είναι {2}",accessibleMilestoneInfo:"Η ώρα είναι {0}",accessibleRowInfo:"Γραμμή {0}",accessibleTaskTypeMilestone:"Ορόσημο",accessibleTaskTypeSummary:"Σύνοψη",accessiblePredecessorInfo:"{0} προηγούμενα στοιχεία",accessibleSuccessorInfo:"{0} επόμενα στοιχεία",accessibleDependencyInfo:"Ο τύπος εξάρτησης {0}, συνδέει το {1} στο {2}",startStartDependencyAriaDesc:"από αρχή σε αρχή",startFinishDependencyAriaDesc:"από την αρχή στο τέλος",finishStartDependencyAriaDesc:"από το τέλος στην αρχή",finishFinishDependencyAriaDesc:"από τέλος σε τέλος",tooltipZoomIn:"Μεγέθυνση",tooltipZoomOut:"Σμίκρυνση",labelLevel:"Επίπεδο",labelRow:"Γραμμή",labelStart:"Έναρξη",labelEnd:"Τέλος",labelDate:"Ημερομηνία",labelBaselineStart:"Έναρξη γραμμής βάσης",labelBaselineEnd:"Λήξη γραμμής βάσης",labelBaselineDate:"Ημερομηνία γραμμής βάσης",labelLabel:"Ετικέτα",labelProgress:"Πρόοδος",labelMoveBy:"Μετακίνηση από",labelResizeBy:"Αλλαγή μεγέθους κατά",taskMoveInitiated:"Έναρξη εργασίας μετακίνησης",taskResizeEndInitiated:"Εκκινήθηκε η λήξη εργασίας αλλαγής μεγέθους",taskResizeStartInitiated:"Εκκινήθηκε η έναρξη εργασίας αλλαγής μεγέθους",taskMoveSelectionInfo:"Επιλέχθηκαν {0} άλλες",taskResizeSelectionInfo:"Επιλέχθηκαν {0} άλλες",taskMoveInitiatedInstruction:"Μετακινηθείτε με τα πλήκτρα-βέλη",taskResizeInitiatedInstruction:"Χρησιμοποιήστε τα πλήκτρα βέλους για αλλαγή μεγέθους",taskMoveFinalized:"Οριστικοποίηση εργασίας μετακίνησης",taskResizeFinalized:"Η εργασία αλλαγής μεγέθους ολοκληρώθηκε",taskMoveCancelled:"Ακύρωση εργασίας μετακίνησης",taskResizeCancelled:"Η εργασία αλλαγής μεγέθους ακυρώθηκε",taskResizeStartHandle:"Δείκτης χειρισμού έναρξης εργασίας αλλαγής μεγέθους",taskResizeEndHandle:"Δείκτης χειρισμού λήξης εργασίας αλλαγής μεγέθους"},"oj-ojLegend":{componentName:"Λεζάντα",tooltipExpand:"Ανάπτυξη",tooltipCollapse:"Σύμπτυξη"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Άλλο",labelGroup:"Ομάδα",labelSize:"Μέγεθος",labelAdditionalData:"Πρόσθετα δεδομένα",componentName:"Πλαίσιο {0}"},"oj-ojPictoChart":{componentName:"Γράφημα εικόνων"},"oj-ojSparkChart":{componentName:"Γράφημα"},"oj-ojSunburst":{labelColor:"Χρώμα",labelSize:"Μέγεθος",tooltipExpand:"Ανάπτυξη",tooltipCollapse:"Σύμπτυξη",componentName:"Γράφημα Sunburst"},"oj-ojTagCloud":{componentName:"Πλαίσιο ετικετών"},"oj-ojThematicMap":{componentName:"Θεματικός χάρτης",areasRegion:"Περιοχές",linksRegion:"Δεσμοί",markersRegion:"Ενδείκτες"},"oj-ojTimeAxis":{componentName:"Άξονας χρόνου"},"oj-ojTimeline":{componentName:"Χρονοδιάγραμμα",accessibleItemDesc:"Η περιγραφή είναι {0}.",accessibleItemEnd:"Η ώρα λήξης είναι {0}.",accessibleItemStart:"Η ώρα έναρξης είναι {0}.",accessibleItemTitle:"Ο τίτλος είναι {0}.",labelSeries:"Σειρές",tooltipZoomIn:"Μεγέθυνση",tooltipZoomOut:"Σμίκρυνση",labelStart:"Έναρξη",labelEnd:"Τέλος",labelDate:"Ημερομηνία",labelTitle:"Τίτλος",labelDescription:"Περιγραφή"},"oj-ojTreemap":{labelColor:"Χρώμα",labelSize:"Μέγεθος",tooltipIsolate:"Απομόνωση",tooltipRestore:"Επαναφορά",componentName:"Διάγραμμα Treemap"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"Τ",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Μη έγκυρα δεδομένα",labelNoData:"Δεν υπάρχουν δεδομένα για εμφάνιση",labelClearSelection:"Εκκαθάριση επιλογής",labelDataVisualization:"Απεικόνιση δεδομένων",stateSelected:"Επιλεγμένο",stateUnselected:"Μη επιλεγμένο",stateMaximized:"Μεγιστοποιήθηκε",stateMinimized:"Ελαχιστοποιήθηκε",stateExpanded:"Αναπτύχθηκε",stateCollapsed:"Συμπτύχθηκε",stateIsolated:"Απομονώθηκε",stateHidden:"Κρυφό",stateVisible:"Ορατό",stateDrillable:"Με δυνατότητα ανάπτυξης/σύμπτυξης",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} από {1}"},"oj-ojNavigationList":{defaultRootLabel:"Λίστα πλοήγησης",hierMenuBtnLabel:"Κουμπί μενού ιεραρχίας",selectedLabel:"επιλεγμένα",previousIcon:"Προηγούμενο",msgFetchingData:"Ανάκτηση δεδομένων...",msgNoData:"Δεν υπάρχουν στοιχεία για εμφάνιση.",overflowItemLabel:"Περισσότερα",accessibleReorderTouchInstructionText:"Κάντε διπλό πάτημα και κρατήστε πατημένο.  Περιμένετε να ακουστεί ο ήχος και σύρετε για αναδιάταξη.",accessibleReorderBeforeItem:"Πριν από το {item}",accessibleReorderAfterItem:"Μετά το {item}",labelCut:"Αποκοπή",labelPasteBefore:"Επικόλληση πριν",labelPasteAfter:"Επικόλληση μετά",labelRemove:"Κατάργηση",removeCueText:"Με δυνατότητα κατάργησης"},"oj-ojSlider":{noValue:"Το ojSlider δεν έχει τιμή",maxMin:"Το μέγιστο όριο δεν πρέπει να είναι μικρότερο από ή ίσο με το ελάχιστο όριο",valueRange:"Η τιμή πρέπει να βρίσκεται εντός του εύρους ελάχιστης έως μέγιστης τιμής",optionNum:"Η επιλογή {option} δεν είναι αριθμός",invalidStep:"Μη έγκυρο βήμα. Το βήμα πρέπει να είναι > 0"},"oj-ojDialog":{labelCloseIcon:"Κλείσιμο"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Αναδυόμενο παράθυρο εισαγωγής. Πατήστε το F6 για πλοήγηση μεταξύ του αναδυόμενου μενού και του σχετικού στοιχείου ελέγχου.",ariaLiveRegionInitialFocusNone:"Άνοιξε το αναδυόμενο παράθυρο. Πατήστε το F6 για πλοήγηση μεταξύ του αναδυόμενου μενού και του σχετικού στοιχείου ελέγχου.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Αναδυόμενο παράθυρο εισαγωγής. Το αναδυόμενο παράθυρο μπορεί να κλείσει μεταβαίνοντας στην τελευταία σύνδεση εντός του αναδυόμενου παραθύρου.",ariaLiveRegionInitialFocusNoneTouch:"Άνοιξε το αναδυόμενο παράθυρο. Μεταβείτε στην επόμενη σύνδεση για να εστιάσετε εντός του αναδυόμενου παραθύρου.",ariaFocusSkipLink:"Πατήστε δύο φορές για να μεταβείτε στο ανοιχτό αναδυόμενο παράθυρο.",ariaCloseSkipLink:"Πατήστε δύο φορές για να κλείσετε το ανοιχτό αναδυόμενο παράθυρο."},"oj-ojRefresher":{ariaRefreshLink:"Ενεργοποίηση δεσμού για ανανέωση περιεχομένου",ariaRefreshingLink:"Γίνεται ανανέωση περιεχομένου",ariaRefreshCompleteLink:"Η ανανέωση ολοκληρώθηκε"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:'Εμφάνιση της "έναρξης ενεργειών"',ariaShowEndActionsDescription:'Εμφάνιση της "λήξης ενεργειών"',ariaHideActionsDescription:"Απόκρυψη ενεργειών"},"oj-ojIndexer":{indexerCharacters:"Α|Β|Γ|Δ|Ε|Ζ|Η|Θ|Ι|Κ|Λ|Μ|Ν|Ξ|Ο|Π|Ρ|Σ|Τ|Υ|Φ|Χ|Ψ|Ω",indexerOthers:"#",ariaDisabledLabel:"Δεν βρέθηκε κεφαλίδα ομάδας που να συμφωνεί με τα κριτήρια",ariaOthersLabel:"αριθμός",ariaInBetweenText:"Μεταξύ {first} και {second}",ariaKeyboardInstructionText:"Πατήστε το πλήκτρο Εnter για να επιλέξετε τιμή.",ariaTouchInstructionText:"Πατήστε δύο φορές και κρατήστε πατημένο για να εισέλθετε στη λειτουργία κινήσεων και έπειτα σύρετε προς τα επάνω ή προς τα κάτω για να προσαρμόσετε την τιμή."},"oj-ojMenu":{labelCancel:"Ακύρωση",ariaFocusSkipLink:"Η εστίαση βρίσκεται εντός του μενού, πατήστε δύο φορές ή σύρετε για να μετακινήσετε την εστίαση στο πρώτο στοιχείο του μενού."},"oj-ojColorSpectrum":{labelHue:"Απόχρωση",labelOpacity:"Διαφάνεια",labelSatLum:"Κορεσμός/φωτεινότητα",labelThumbDesc:"Ρυθμιστικό χρωματικού φάσματος τεσσάρων κατευθύνσεων."},"oj-ojColorPalette":{labelNone:"Καμία επιλογή"},"oj-ojColorPicker":{labelSwatches:"Δείγματα",labelCustomColors:"Προσαρμοσμένα χρώματα",labelPrevColor:"Προηγούμενο χρώμα",labelDefColor:"Προεπιλεγμένο χρώμα",labelDelete:"Διαγραφή",labelDeleteQ:"Να διαγραφεί;",labelAdd:"Προσθήκη",labelAddColor:"Προσθήκη χρώματος",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Απόχρωση",labelSliderSaturation:"Κορεσμός",labelSliderSat:"Κορεσμός",labelSliderLightness:"Ένταση",labelSliderLum:"Φωτεινότητα",labelSliderAlpha:"Alpha",labelOpacity:"Διαφάνεια",labelSliderRed:"Κόκκινο",labelSliderGreen:"Πράσινο",labelSliderBlue:"Μπλε"},"oj-ojFilePicker":{dropzoneText:"Αποθέστε εδώ αρχεία ή κάντε κλικ για αποστολή"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Σε εξέλιξη"},"oj-ojMessage":{labelCloseIcon:"Κλείσιμο",categories:{error:"Σφάλμα",warning:"Προειδοποίηση",info:"Πληροφορίες",confirmation:"Επιβεβαίωση"}},"oj-ojMessages":{labelLandmark:"Μηνύματα",ariaLiveRegion:{navigationFromKeyboard:"Περιοχή εισαγωγής μηνυμάτων. Πατήστε το F6 για πλοήγηση σε προηγούμενο εστιασμένο στοιχείο.",navigationToTouch:"Η περιοχή μηνυμάτων έχει νέα μηνύματα. Χρησιμοποιήστε τη φωνή μέσω ρότορα για πλοήγηση στο σημείο εντοπισμού μηνυμάτων.",navigationToKeyboard:"Η περιοχή μηνυμάτων έχει νέα μηνύματα.  Πατήστε το F6 για πλοήγηση στην πιο πρόσφατη περιοχή μηνυμάτων.",newMessage:"Κατηγορία μηνυμάτων {category}. {summary}."}}});