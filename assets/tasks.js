window.WETLAB_TASKS = [
  {
    "id": 1,
    "title": "Magnetic Stirring Setup and Operation",
    "instruction": "Place the magnetic stir bar into the liquid-filled beaker, then place the beaker at the center of the magnetic stirrer platform.",
    "horizon": "Medium",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 1,
    "families": [
      "HP"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "align",
      "place"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Lift the stir bar above the tray.",
        "weight": 0.2,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Place the stir bar inside the beaker.",
        "weight": 0.2,
        "skills": "align, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Place the beaker on the magnetic stirrer.",
        "weight": 0.2,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Center the beaker on the stirrer plate.",
        "weight": 0.2,
        "skills": "align",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Retain ≥95% of the original liquid in the beaker.",
        "weight": 0.1,
        "skills": "—",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Keep the beaker upright.",
        "weight": 0.1,
        "skills": "place",
        "count": 1
      }
    ],
    "media": "assets/media/task-03.mp4",
    "poster": "assets/media/task-03-poster.jpg",
    "duration": 150.0,
    "width": 640,
    "height": 480
  },
  {
    "id": 2,
    "title": "Bimanual Stopper Removal",
    "instruction": "Use the left robotic arm to hold the transparent reagent bottle on the left steady. Use the right robotic arm to remove its stopper and place the stopper on the clean tray. Return both arms to their home positions without touching any other objects.",
    "horizon": "Short",
    "precision": "Low",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 2,
    "families": [
      "HP"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "grasp",
      "pick",
      "place"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Separate the stopper from the bottle.",
        "weight": 0.5,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Place the stopper on the tray.",
        "weight": 0.5,
        "skills": "place",
        "count": 1
      }
    ],
    "media": "assets/media/task-05.mp4",
    "poster": "assets/media/task-05-poster.jpg",
    "duration": 46.334,
    "width": 640,
    "height": 480
  },
  {
    "id": 3,
    "title": "Fehling Water-Bath Test",
    "instruction": "Move the test tube containing Fehling's reagent and the standard sugar solution from the test tube rack into the heated water bath, wait until a brick-red cuprous oxide precipitate forms, and return the test tube to the test tube rack.",
    "horizon": "Medium",
    "precision": "High",
    "quantitative_target": "No",
    "reaction_observation": "Yes",
    "paper_order": 3,
    "families": [
      "HP"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "place",
      "insert"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Lift the test tube clear of its rack.",
        "weight": 0.15,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reinsert the test tube into the rack.",
        "weight": 0.15,
        "skills": "insert",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reach >50% reaction progress.",
        "weight": 0.35,
        "skills": "align, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reach >95% reaction progress.",
        "weight": 0.35,
        "skills": "align, place",
        "count": 1
      }
    ],
    "media": "assets/media/task-12.mp4",
    "poster": "assets/media/task-12-poster.jpg",
    "duration": 268.267,
    "width": 640,
    "height": 480
  },
  {
    "id": 4,
    "title": "Controlled Flask-to-Cylinder Transfer",
    "instruction": "Lift and slightly incline the graduated cylinder, transfer a portion of the liquid from the Erlenmeyer flask into the cylinder without spilling any liquid, and return both pieces of glassware upright to the table.",
    "horizon": "Medium",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 4,
    "families": [
      "TM"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "pour",
      "align",
      "place"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Tilt the graduated cylinder by 5–45°.",
        "weight": 0.2,
        "skills": "grasp, pick, pour",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Transfer ≥1% of the flask liquid into the cylinder.",
        "weight": 0.4,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Retain ≥95% of the original liquid in the two vessels.",
        "weight": 0.2,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Return the cylinder and flask upright.",
        "weight": 0.1,
        "skills": "place",
        "count": 2
      }
    ],
    "media": "assets/media/task-01.mp4",
    "poster": "assets/media/task-01-poster.jpg",
    "duration": 150.8,
    "width": 640,
    "height": 480
  },
  {
    "id": 5,
    "title": "Liquid Transfer and Stirring",
    "instruction": "Pour all liquid from the graduated cylinder into the beaker, stand the empty cylinder upright on the table, stir the liquid with the glass stirring rod, and place the glass stirring rod on the clean tray.",
    "horizon": "Medium",
    "precision": "Low",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 5,
    "families": [
      "TM"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "pour",
      "stir",
      "place"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Transfer ≥45% of the cylinder liquid into the beaker.",
        "weight": 0.2,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Transfer ≥90% of the cylinder liquid into the beaker.",
        "weight": 0.2,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Insert ≥10% of the glass rod into the beaker.",
        "weight": 0.4,
        "skills": "grasp, pick, place, stir",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Retain ≥90% of the original beaker liquid.",
        "weight": 0.04,
        "skills": "—",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Keep ≥90% of the cylinder liquid in the beaker.",
        "weight": 0.04,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Keep the beaker upright.",
        "weight": 0.04,
        "skills": "—",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Return the cylinder upright; place the rod on the tray.",
        "weight": 0.04,
        "skills": "place",
        "count": 2
      }
    ],
    "media": "assets/media/task-02.mp4",
    "poster": "assets/media/task-02-poster.jpg",
    "duration": 271.2,
    "width": 640,
    "height": 480
  },
  {
    "id": 6,
    "title": "Funnel-Assisted Liquid Transfer",
    "instruction": "Use the right robotic arm to pick up the funnel from the funnel stand and place it on the reagent bottle; next, use the left robotic arm to empty the graduated cylinder through the funnel into the bottle and return the cylinder upright to the table.",
    "horizon": "Medium",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 6,
    "families": [
      "TM"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "insert",
      "pour",
      "align"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Lift the funnel clear of its rack.",
        "weight": 0.3,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Insert the funnel upright into the bottle neck, with contact and aligned centers.",
        "weight": 0.3,
        "skills": "align, insert",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Transfer ≥80% of the cylinder liquid into the bottle.",
        "weight": 0.3,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Return the cylinder upright.",
        "weight": 0.1,
        "skills": "place",
        "count": 1
      }
    ],
    "media": "assets/media/task-04.mp4",
    "poster": "assets/media/task-04-poster.jpg",
    "duration": 256.2,
    "width": 640,
    "height": 480
  },
  {
    "id": 7,
    "title": "Blue-Bottle Redox Cycle",
    "instruction": "Pour the aqueous glucose solution and then the aqueous sodium hydroxide solution into the empty Erlenmeyer flask, standing each emptied cylinder upright. Add a small amount of methylene blue solution using a glass rod and lay the rod on the clean tray. Wait until the mixture becomes colorless, then shake the flask until the mixture turns blue and set the flask upright on the table.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "Yes",
    "paper_order": 7,
    "families": [
      "TM"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "pour",
      "insert",
      "shake"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Transfer ≥60% of each cylinder’s liquid into the flask.",
        "weight": 0.1,
        "skills": "grasp, pick, pour, align",
        "count": 2
      },
      {
        "stage": "S2",
        "criterion": "Dip the glass rod into methylene blue.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Touch the flask mixture with the wetted rod.",
        "weight": 0.2,
        "skills": "grasp, pick, insert",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Allow the stationary solution to become colorless.",
        "weight": 0.1,
        "skills": "—",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Lift and shake the flask until the solution turns blue.",
        "weight": 0.2,
        "skills": "grasp, pick, shake",
        "count": 1
      },
      {
        "stage": "S6",
        "criterion": "Return both cylinders and the flask upright; place the rod on the tray.",
        "weight": 0.05,
        "skills": "place",
        "count": 4
      }
    ],
    "media": "assets/media/task-13.mp4",
    "poster": "assets/media/task-13-poster.jpg",
    "duration": 286.934,
    "width": 640,
    "height": 480
  },
  {
    "id": 8,
    "title": "Centrifuge Tube Unloading",
    "instruction": "Press the centrifuge door-opening button, remove the two centrifuge tubes, and place both centrifuge tubes in the centrifuge tube rack on the left.",
    "horizon": "Medium",
    "precision": "High",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 8,
    "families": [
      "IO"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "press",
      "pick",
      "insert"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Open the centrifuge lid to 0–30°.",
        "weight": 0.2,
        "skills": "press",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Remove each of the two tubes from the rotor.",
        "weight": 0.2,
        "skills": "grasp, pick",
        "count": 2
      },
      {
        "stage": "S2",
        "criterion": "Insert ≥40% of each tube into the rack.",
        "weight": 0.1,
        "skills": "insert",
        "count": 2
      },
      {
        "stage": "S2",
        "criterion": "Keep each tube upright.",
        "weight": 0.1,
        "skills": "insert",
        "count": 2
      }
    ],
    "media": "assets/media/task-06.mp4",
    "poster": "assets/media/task-06-poster.jpg",
    "duration": 255.334,
    "width": 640,
    "height": 480
  },
  {
    "id": 9,
    "title": "Centrifuge Tube Loading",
    "instruction": "Open the centrifuge and place two centrifuge tubes from the left-side centrifuge tube rack into two opposite rotor slots.",
    "horizon": "Medium",
    "precision": "High",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 9,
    "families": [
      "IO"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "press",
      "insert"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Open the centrifuge lid to 0–30°.",
        "weight": 0.16666666666666666,
        "skills": "press",
        "count": 1
      },
      {
        "stage": "S1",
        "criterion": "Insert each of the two tubes into a rotor slot, tilted 15–35° from vertical.",
        "weight": 0.16666666666666666,
        "skills": "insert",
        "count": 2
      },
      {
        "stage": "S1",
        "criterion": "Lift each tube clear of the tube rack.",
        "weight": 0.16666666666666666,
        "skills": "grasp, pick",
        "count": 2
      },
      {
        "stage": "S1",
        "criterion": "Place the two tubes in diametrically opposite rotor slots (180° ± 7.5°).",
        "weight": 0.16666666666666666,
        "skills": "—",
        "count": 1
      }
    ],
    "media": "assets/media/task-07.mp4",
    "poster": "assets/media/task-07-poster.jpg",
    "duration": 152.934,
    "width": 640,
    "height": 480
  },
  {
    "id": 10,
    "title": "Oven Loading and Temperature Setting",
    "instruction": "Open the drying oven door, place the empty beaker and empty Erlenmeyer flask on the internal metal rack, close the oven door, and rotate the temperature-control knob clockwise by approximately 90°.",
    "horizon": "Long",
    "precision": "High",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 10,
    "families": [
      "IO"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "handover",
      "push",
      "turn"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Open the oven door to 10–60°.",
        "weight": 0.2,
        "skills": "pull",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Place the beaker on the oven rack.",
        "weight": 0.15,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Place the flask on the oven rack.",
        "weight": 0.15,
        "skills": "grasp, pick, handover, place",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Close the oven door to 0–5°.",
        "weight": 0.2,
        "skills": "push",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Rotate the temperature knob clockwise by 60–120°.",
        "weight": 0.2,
        "skills": "grasp, turn",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Keep the beaker and flask upright.",
        "weight": 0.05,
        "skills": "place",
        "count": 2
      }
    ],
    "media": "assets/media/task-08.mp4",
    "poster": "assets/media/task-08-poster.jpg",
    "duration": 322.667,
    "width": 640,
    "height": 480
  },
  {
    "id": 11,
    "title": "Oven Unloading",
    "instruction": "Open the oven door, remove the beaker and the Erlenmeyer flask from the metal rack, place both vessels on the clean tray, and close the oven door.",
    "horizon": "Medium",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 11,
    "families": [
      "IO"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "pull",
      "handover",
      "push"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Open the oven door to 10–60°.",
        "weight": 0.2,
        "skills": "pull",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Remove the beaker and flask from the oven.",
        "weight": 0.1,
        "skills": "grasp, pick",
        "count": 2
      },
      {
        "stage": "S3",
        "criterion": "Close the oven door to 0–5°.",
        "weight": 0.2,
        "skills": "push",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Place the beaker and flask on the tray.",
        "weight": 0.2,
        "skills": "grasp, pick, handover, place",
        "count": 2
      }
    ],
    "media": "assets/media/task-11.mp4",
    "poster": "assets/media/task-11-poster.jpg",
    "duration": 237.334,
    "width": 640,
    "height": 480
  },
  {
    "id": 12,
    "title": "Whole-Sample Solid Weighing",
    "instruction": "Tare the empty weighing bottle on the balance first, take it off to pour in all solid material from the weighing boat, and place the loaded bottle back on the balance to weigh.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 12,
    "families": [
      "MD"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "press",
      "pour",
      "align"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Place the empty weighing bottle on the balance.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Press the tare button.",
        "weight": 0.1,
        "skills": "press",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Remove the bottle from the balance.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Transfer each of five solid particles into the bottle.",
        "weight": 0.1,
        "skills": "grasp, pick, pour, align",
        "count": 5
      },
      {
        "stage": "S5",
        "criterion": "Return the filled bottle to the balance.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Keep all five particles inside the bottle.",
        "weight": 0.1,
        "skills": "grasp, pick, pour, align",
        "count": 1
      }
    ],
    "media": "assets/media/task-09.mp4",
    "poster": "assets/media/task-09-poster.jpg",
    "duration": 146.0,
    "width": 640,
    "height": 480
  },
  {
    "id": 13,
    "title": "Color-Endpoint Titration",
    "instruction": "Perform the acid–base titration by opening the burette stopcock and adding titrant until the solution in the Erlenmeyer flask changes from colorless to a stable pale pink, then stop the titration immediately.",
    "horizon": "Short",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "Yes",
    "paper_order": 13,
    "families": [
      "MD"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "turn"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Open the burette stopcock.",
        "weight": 0.2,
        "skills": "turn",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Close the burette stopcock.",
        "weight": 0.2,
        "skills": "turn",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reach a stable pale-pink solution in the flask.",
        "weight": 0.6,
        "skills": "turn",
        "count": 1
      }
    ],
    "media": "assets/media/task-10.mp4",
    "poster": "assets/media/task-10-poster.jpg",
    "duration": 59.2,
    "width": 640,
    "height": 480
  },
  {
    "id": 14,
    "title": "Target-Mass Powder Weighing",
    "instruction": "Weigh 0.18–0.22 g of powder in the weighing boat. Place the weighing boat on the balance and tare the balance before adding powder with the laboratory spoon. Pour any powder remaining in the laboratory spoon into the reagent bottle, then place the laboratory spoon in the beaker.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "Yes",
    "reaction_observation": "No",
    "paper_order": 14,
    "families": [
      "MD"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "scoop",
      "pour",
      "press"
    ],
    "split": "train",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Place the weighing boat on the balance.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Press tare to reset the balance reading.",
        "weight": 0.2,
        "skills": "press",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Lift the spoon out of the beaker.",
        "weight": 0.1,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Add powder until the balance reads > 0.01 g.",
        "weight": 0.2,
        "skills": "scoop, pour",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Reach 0.20 ± 0.02 g.",
        "weight": 0.3,
        "skills": "scoop, pour",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Return the spoon to the beaker.",
        "weight": 0.1,
        "skills": "place",
        "count": 1
      }
    ],
    "media": "assets/media/task-14.mp4",
    "poster": "assets/media/task-14-poster.jpg",
    "duration": 237.6,
    "width": 640,
    "height": 480
  },
  {
    "id": 15,
    "title": "Oven Retrieval, Liquid Transfer, and Shaking",
    "instruction": "Open the oven door, remove only the clean beaker, and close the oven door. Pour the liquids from the two graduated cylinders into the beaker sequentially. Lift the beaker, shake the beaker from side to side to mix the liquids uniformly, and place the beaker upright on the table.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 15,
    "families": [
      "IO",
      "TM"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "pull",
      "pour",
      "shake"
    ],
    "split": "ood",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Open the oven door to 10–60°.",
        "weight": 0.2,
        "skills": "pull",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Remove the beaker from the oven.",
        "weight": 0.1,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Close the oven door to 0–5°.",
        "weight": 0.2,
        "skills": "push",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Transfer ≥60% of each cylinder’s liquid into the beaker.",
        "weight": 0.1,
        "skills": "grasp, pick, pour, align",
        "count": 2
      },
      {
        "stage": "S5",
        "criterion": "Lift and shake the beaker.",
        "weight": 0.3,
        "skills": "grasp, pick, shake",
        "count": 1
      }
    ],
    "media": "assets/media/task-15.png",
    "width": 1280,
    "height": 960
  },
  {
    "id": 16,
    "title": "MOF Funnel Transfer and Stirrer Setup",
    "instruction": "Place the funnel in the neck of the Erlenmeyer flask, then pour the liquid from the graduated cylinder through the funnel. Set the graduated cylinder upright on the table. Remove the funnel and return the funnel to the funnel rack. Move the flask to the center of the magnetic hotplate stirrer plate.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 16,
    "families": [
      "HP",
      "TM"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "insert",
      "pour",
      "align"
    ],
    "split": "ood",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Lift the funnel clear of its rack.",
        "weight": 0.1,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Insert the funnel upright into the flask neck, with contact and aligned centers.",
        "weight": 0.3,
        "skills": "align, insert",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Transfer ≥80% of the cylinder liquid into the flask.",
        "weight": 0.2,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Return the funnel to its rack.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Place the flask on the stirrer.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Center the flask on the stirrer plate.",
        "weight": 0.2,
        "skills": "align",
        "count": 1
      }
    ],
    "media": "assets/media/task-16.png",
    "width": 1280,
    "height": 960
  },
  {
    "id": 17,
    "title": "Evaporative-Crystallization Setup",
    "instruction": "Place the alcohol lamp on the ring stand base directly below the iron ring, place the evaporating dish level on the iron ring, pour all liquid from the beaker into the evaporating dish, and return the beaker upright to the tabletop.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "No",
    "paper_order": 17,
    "families": [
      "HP",
      "TM"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "place",
      "pour",
      "align"
    ],
    "split": "ood",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Place the lamp below the ring with center offset <3 cm.",
        "weight": 0.4,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S1",
        "criterion": "Place the evaporating dish nearly level on the ring.",
        "weight": 0.4,
        "skills": "grasp, pick, align, place",
        "count": 1
      },
      {
        "stage": "S1",
        "criterion": "Transfer ≥80% of the beaker liquid into the dish.",
        "weight": 0.2,
        "skills": "grasp, pick, pour, align, place",
        "count": 1
      }
    ],
    "media": "assets/media/task-20.png",
    "width": 1280,
    "height": 960
  },
  {
    "id": 18,
    "title": "Copper-Sulfate Dissolution",
    "instruction": "Transfer the weighed copper sulfate crystals from the balance boat into the beaker, add the entire water volume from the graduated cylinder before setting the cylinder down securely and upright, and stir the mixture with a glass rod before resting the rod on a clean tray.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "No",
    "reaction_observation": "Yes",
    "paper_order": 18,
    "families": [
      "TM"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "pour",
      "stir"
    ],
    "split": "ood",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Transfer each of five solid particles into the beaker.",
        "weight": 0.05,
        "skills": "grasp, pick, pour, align",
        "count": 5
      },
      {
        "stage": "S2",
        "criterion": "Transfer ≥80% of the cylinder liquid into the beaker.",
        "weight": 0.2,
        "skills": "grasp, pick, pour, align",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Insert ≥10% of the glass rod into the beaker.",
        "weight": 0.3,
        "skills": "grasp, pick, place, stir",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Keep the beaker upright.",
        "weight": 0.05,
        "skills": "—",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Return the cylinder upright.",
        "weight": 0.1,
        "skills": "place",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Place the rod on the tray.",
        "weight": 0.1,
        "skills": "place",
        "count": 1
      }
    ],
    "media": "assets/media/task-17.png",
    "width": 1280,
    "height": 960
  },
  {
    "id": 19,
    "title": "Silver-Mirror Water-Bath Test",
    "instruction": "Heat the test tube containing freshly prepared Tollens’ reagent and glucose standard solution in a 50–60 °C water bath without shaking. Return the test tube to the test tube rack when a clearly visible, continuous, bright silver mirror forms on the inner wall.",
    "horizon": "Medium",
    "precision": "High",
    "quantitative_target": "No",
    "reaction_observation": "Yes",
    "paper_order": 19,
    "families": [
      "HP"
    ],
    "scope": "procedure",
    "distinctive_skills": [
      "place",
      "insert"
    ],
    "split": "ood",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Lift the test tube clear of its rack.",
        "weight": 0.15,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reinsert the test tube into the rack.",
        "weight": 0.15,
        "skills": "insert",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reach >50% reaction progress.",
        "weight": 0.35,
        "skills": "align, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Reach >95% reaction progress.",
        "weight": 0.35,
        "skills": "align, place",
        "count": 1
      }
    ],
    "media": "assets/media/task-18.png",
    "width": 1280,
    "height": 960
  },
  {
    "id": 20,
    "title": "Target-Mass Weighing at a Held-Out Setpoint",
    "instruction": "Set the empty weighing boat on the balance and establish a zero reading using the tare button. Add powder with the laboratory spoon to obtain 0.12 g within ±0.02 g. Empty residual powder from the laboratory spoon into the reagent bottle, then place the laboratory spoon inside the beaker.",
    "horizon": "Long",
    "precision": "Medium",
    "quantitative_target": "Yes",
    "reaction_observation": "No",
    "paper_order": 20,
    "families": [
      "MD"
    ],
    "scope": "operation",
    "distinctive_skills": [
      "scoop",
      "pour",
      "press"
    ],
    "split": "ood",
    "metrics": [
      {
        "stage": "S1",
        "criterion": "Place the weighing boat on the balance.",
        "weight": 0.1,
        "skills": "grasp, pick, place",
        "count": 1
      },
      {
        "stage": "S2",
        "criterion": "Press tare to reset the balance reading.",
        "weight": 0.2,
        "skills": "press",
        "count": 1
      },
      {
        "stage": "S3",
        "criterion": "Lift the spoon out of the beaker.",
        "weight": 0.1,
        "skills": "grasp, pick",
        "count": 1
      },
      {
        "stage": "S4",
        "criterion": "Add powder until the balance reads > 0.01 g.",
        "weight": 0.2,
        "skills": "scoop, pour",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Reach the specified target mass within ±0.02 g.",
        "weight": 0.3,
        "skills": "scoop, pour",
        "count": 1
      },
      {
        "stage": "S5",
        "criterion": "Return the spoon to the beaker.",
        "weight": 0.1,
        "skills": "place",
        "count": 1
      }
    ],
    "media": "assets/media/task-19.png",
    "width": 1280,
    "height": 960
  }
];
