var shuffleSequence = seq("intro", sepWith("sep", seq(rshuffle("practice"), modifyRunningOrder(randomize(rshuffle(shuffle("a", "b", "c", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", 
                                                                                                       "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19", "f20", 
                                                                                                       "f21", "f22", "f23", "f24", "f25", "f26", "f27", "f28", "f29", "f30", 
                                                                                                       "f31", "f32", "f33", "f34", "f35", "f36")))), "sr", "FinalCode")));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading",
        hideUnderscores: true
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

function modifyRunningOrder(ro) {
    for (var i = 0; i < ro.length; ++i) {
        if (i % 24 == 0) {
            // Passing ’true’ as the third argument casues the results from this controller
            // to be omitted from the results file. (Though in fact, the Message controller
            // does not add any results in any case.)
            ro[i].push(new DynamicElement(
                "Message",
                { html: "<p>This is a 10 second break.</p>", transfer: 10000 },
                true
)); }
}
return ro; }

var manualSendResults = true;        

var counterOverride = 3;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


// Three practice items for self-paced reading (one with a comprehension question).

    ["practice", "DashedSentence", {s: "This is a_practice_sentence to get you used to reading sentences like this."}],
    ["practice", "DashedSentence", {s: "This is a_practice_sentence with a_practice_question following it."},
                 "Question", {hasCorrect: 0, randomOrder: false, 
                              q: "Are you following along OK?",
                              as: ["Press 1 for 'Yes'.", "Press 2 for No."]}],


//Items
[["a", 1], "DashedSentence", {s: "The woman accidently hurt herself while playing sports in the park."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Are sports played in the park?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 1], "DashedSentence", {s: "The man accidently hurt herself while playing sports in the park."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Are sports played in the park?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 1], "DashedSentence", {s: "The men accidently hurt herself while playing sports in the park."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Are sports played in the park?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 2], "DashedSentence", {s: "The nurse recently defended herself against the false accusations."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Were the accusations true?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 2], "DashedSentence", {s: "The policeman recently defended herself against the false accusations."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Were the accusations true?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 2], "DashedSentence", {s: "The policemen recently defended herself against the false accusations."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Were the accusations true?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 3], "DashedSentence", {s: "The father often blamed himself for the recent accident."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the accident happen recently?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 3], "DashedSentence", {s: "The mother often blamed himself for the recent accident."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the accident happen recently?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 3], "DashedSentence", {s: "The mothers often blamed himself for the recent accident."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the accident happen recently?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 4], "DashedSentence", {s: "The priest recently motivated himself to learn more about water crisis in Africa."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Is there a water crisis in Africa?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 4], "DashedSentence", {s: "The nun recently motivated himself to learn more about water crisis in Africa."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Is there a water crisis in Africa?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 4], "DashedSentence", {s: "The nuns recently motivated himself to learn more about water crisis in Africa."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Is there a water crisis in Africa?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 5], "DashedSentence", {s: "The bachelor eagerly introduced himself to the celebrity at the charity event. "},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did a celebrity attend the charity event?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 5], "DashedSentence", {s: "The girl eagerly introduced himself to the celebrity at the charity event. "},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did a celebrity attend the charity event?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 5], "DashedSentence", {s: "The girls eagerly introduced himself to the celebrity at the charity event. "},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did a celebrity attend the charity event?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 6], "DashedSentence", {s: "The girl recently taught herself how to read Latin using a smartphone app."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Do smartphone apps teach Latin?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 6], "DashedSentence", {s: "The boy recently taught herself how to read Latin using a smartphone app."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Do smartphone apps teach Latin?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 6], "DashedSentence", {s: "The boys recently taught herself how to read Latin using a smartphone app."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Do smartphone apps teach Latin?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 7], "DashedSentence", {s: "The actress proudly praised herself for the terrific movie."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the movie horrible?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 7], "DashedSentence", {s: "The man proudly praised herself for the terrific movie."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the movie horrible?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 7], "DashedSentence", {s: "The men proudly praised herself for the terrific movie."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the movie horrible?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 8], "DashedSentence", {s: "The waiter repeatedly reminded himself about the outstanding orders."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Were there outstanding orders?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 8], "DashedSentence", {s: "The waitress repeatedly reminded himself about the outstanding orders."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Were there outstanding orders?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 8], "DashedSentence", {s: "The waitresses repeatedly reminded himself about the outstanding orders."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Were there outstanding orders?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 9], "DashedSentence", {s: "The cheerleader secretly blamed herself for losing the difficult competition."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the competition easy?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 9], "DashedSentence", {s: "The football_player secretly blamed herself for losing the difficult competition."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the competition easy?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 9], "DashedSentence", {s: "The football_players secretly blamed herself for losing the difficult competition."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the competition easy?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 10], "DashedSentence", {s: "The businesswomen proudly introduced herself to the wealthy client."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the client poor?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 10], "DashedSentence", {s: "The businessman proudly introduced herself to the wealthy client."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the client poor?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 10], "DashedSentence", {s: "The businessmen proudly introduced herself to the wealthy client."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the client poor?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 11], "DashedSentence", {s: "The salesman accidently embarrassed himself at the corporate event hosted by the CEO."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the CEO host a corporate event?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 11], "DashedSentence", {s: "The saleswoman accidently embarrassed himself at the corporate event hosted by the CEO."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the CEO host a corporate event?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 11], "DashedSentence", {s: "The saleswomen accidently embarrassed himself at the corporate event hosted by the CEO."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the CEO host a corporate event?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 12], "DashedSentence", {s: "The boy quietly amused himself during the boring recital."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the recital exciting?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 12], "DashedSentence", {s: "The girl quietly amused himself during the boring recital."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the recital exciting?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 12], "DashedSentence", {s: "The girls quietly amused himself during the boring recital."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the recital exciting?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 13], "DashedSentence", {s: "The policewoman courageously defended herself from the armed criminal."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the criminal armed?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 13], "DashedSentence", {s: "The policeman courageously defended herself from the armed criminal."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the criminal armed?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 13], "DashedSentence", {s: "The policemen courageously defended herself from the armed criminal."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the criminal armed?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 14], "DashedSentence", {s: "The congresswoman often reminded herself about the promises made on the campaign trail."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Were promises made on the campaign trail?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 14], "DashedSentence", {s: "The congressman often reminded herself about the promises made on the campaign trail."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Were promises made on the campaign trail?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 14], "DashedSentence", {s: "The congressmen often reminded herself about the promises made on the campaign trail."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Were promises made on the campaign trail?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 15], "DashedSentence", {s: "The actor recently forgave himself for not doing something about the harassment from the inconsiderate director."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the director kind?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 15], "DashedSentence", {s: "The actress recently forgave himself for not doing something about the harassment from the inconsiderate director."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the director kind?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 15], "DashedSentence", {s: "The actresses recently forgave himself for not doing something about the harassment from the inconsiderate director. "},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the director kind?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 16], "DashedSentence", {s: "The congresswoman often doubted herself after making a controversial decision about birth control."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Are all decisions about birth control uncontroversial?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 16], "DashedSentence", {s: "The priest often doubted herself after making a controversial decision about birth control."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Are all decisions about birth control uncontroversial?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 16], "DashedSentence", {s: "The priests often doubted herself after making a controversial decision about birth control."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Are all decisions about birth control uncontroversial?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 17], "DashedSentence", {s: "The actor intentionally portrayed himself as a kind person during the TV interview."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the interview for a magazine?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 17], "DashedSentence", {s: "The actress intentionally portrayed himself as a kind person during the TV interview."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the interview for a magazine?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 17], "DashedSentence", {s: "The actresses intentionally portrayed himself as a kind person during the TV interview."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the interview for a magazine?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["a", 18], "DashedSentence", {s: "The businesswoman proudly praised herself for a job well done. "},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the job done poorly?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["b", 18], "DashedSentence", {s: "The businessman proudly praised herself for a job well done. "},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the job done poorly?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
[["c", 18], "DashedSentence", {s: "The businessmen proudly praised herself for a job well done. "},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the job done poorly?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],


//Fillers
["f1", "DashedSentence", {s: "The assistant accidently kicked her sister under the table."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the assistant accidently kick someone?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f2", "DashedSentence", {s: "The therapist frequently inspired her clients to achieve more."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the therapist inspiring?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f3", "DashedSentence", {s: "The girl proudly taught herself to play the piano."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the girl teach herself to play the piano?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f4", "DashedSentence", {s: "The businesswoman happily treated herself to a piece of chocolate cake."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the businesswoman treat herself to some cake?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f5", "DashedSentence", {s: "The prince frequently bought his friends brand new clothing."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Did the prince buy his friends used clothing?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f6", "DashedSentence", {s: "The princess recently inspired her servants to be kinder."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the princess inspiring?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f7", "DashedSentence", {s: "The schoolgirl carefully disciplined herself to study more often for the exam."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Did the schoolgirl forget to study for the exam?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f8", "DashedSentence", {s: "The attorney accidently misrepresented his client in the controversial court case."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the court case controversial?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f9", "DashedSentence", {s: "The waiter often recommended his friends to the manager."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the waiter recommend his friends?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f10", "DashedSentence", {s: "The secretary recently motivated herself to get a higher degree."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the secretary satisfied with her current education?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f11", "DashedSentence", {s: "The salesman openly described his boss as a helpful person."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the boss described as mean?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f12", "DashedSentence", {s: "The stock broker erroneously cast his mother in a negative light."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the mother cast in a negative light?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f13", "DashedSentence", {s: "The gardener recently injured himself quite badly with the lawnmower."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the injury minor?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f14", "DashedSentence", {s: "The actress often depicted her idols in her recent films."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the actress make films recently?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f15", "DashedSentence", {s: "The seamstress accidently pinched her finger in the sewing machine."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was it a pair of scissors that pinched the seamstress?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f16", "DashedSentence", {s: "The mother often embarrassed her children in the front of the school."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the mother embarrass her children?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f17", "DashedSentence", {s: "The reporter openly characterized her congressman as an idiot. "},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the congressman characterized as smart?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f18", "DashedSentence", {s: "The nurse deliberately characterized herself as a helpful person."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the nurse characterize herself as being helpful?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f19", "DashedSentence", {s: "The annual report that the businessman read was emailed to the manager."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was it the businessman who was emailed the report?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f20", "DashedSentence", {s: "The photographer took a self-portrait of himself for the magazine."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the self-portrait for a book?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f21", "DashedSentence", {s: "The safety net that the brave policeman used was made of synthetic material."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the safety net made of synthetic material?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f22", "DashedSentence", {s: "The salesman accidently locked himself in the storage room."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was it the saleswoman who was locked in the storage room?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f23", "DashedSentence", {s: "The self-portrait that the famous artist painted was sold at a very high price"},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was it a still life that the artist painted?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f24", "DashedSentence", {s: "The technician accidently shocked himself with the electrical outlet."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the technician shock himself?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f25", "DashedSentence", {s: "The secretary accidently incriminated herself in the office scandal."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the office free of scandals?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f26", "DashedSentence", {s: "The security system that the police officer used was recently installed in the airport."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was a security system installed in the airport", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f27", "DashedSentence", {s: "The slanderous accusation that the wealthy executive disregarded was full of inaccurate information."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the accusation accurate?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f28", "DashedSentence", {s: "The brief memo that the studious schoolgirl noticed was posted the notice board."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the memo long?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f29", "DashedSentence", {s: "The thank you letter that the helpful secretary received was sent from a very important client."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was it the client who received the thank you letter?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f30", "DashedSentence", {s: "The sharp needle that the flustered nurse used was contaminated with several strands of bacteria."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was the needle dull?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f31", "DashedSentence", {s: "The scientist did a study on himself for the scientific journal."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the study self-reflective?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f32", "DashedSentence", {s: "The new medication that the sick patient took was very expensive for the insurance companies."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Did the patient take new medication?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f33", "DashedSentence", {s: "The newspaper article that the rich executive read was quite misleading about the facts."},
    "Question", {hasCorrect: 0, randomOrder: false, q: "Was the article misleading?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f34", "DashedSentence", {s: "The teacher blamed herself for the student's poor grades."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Did the teacher blame the students for their grade?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f35", "DashedSentence", {s: "The reference letter that the job applicant submitted was written by a recent employer."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Was it the employer who submitted the reference letter?", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],
["f36", "DashedSentence", {s: "The hilarious movie that the aspiring actor appeared in was a major hit in the theaters."},
    "Question", {hasCorrect: 1, randomOrder: false, q: "Did you read the sentence? If so, press 2.", as: ["Press 1 or click here for Yes.", "Press 2 or click here for No."]}],

// MTurk Code

["sr", "__SendResults__", { }],
["FinalCode", "Form", {html:["div", ["p", "Thank you for participating. The survey is now completed."], ["p", "Your identifying code is: 8GHER6"], ["p", "Please enter this code in the Mechanical Turk form for this study to receive payment. You can close this window now."]], continueMessage: null}],     
      
    

];
