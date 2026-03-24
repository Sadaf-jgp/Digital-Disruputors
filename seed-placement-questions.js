const mongoose = require('mongoose');
const PlacementQuestion = require('./models/PlacementQuestion');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/campus-portal')
  .then(async () => {
    console.log('Connected to MongoDB');

    // Clear existing questions
    await PlacementQuestion.deleteMany({});
    console.log('Cleared existing questions');

    // CS Questions (adapted from original FAQs)
    const csQuestions = [
      {
        department: 'CS',
        question: 'What does OOP stand for?',
        options: {
          A: 'Object-Oriented Programming',
          B: 'Online Operating Process',
          C: 'Operational Object Protocol',
          D: 'Object-Oriented Process'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'Which is NOT a pillar of OOP?',
        options: {
          A: 'Encapsulation',
          B: 'Inheritance',
          C: 'Polymorphism',
          D: 'Compilation'
        },
        correctAnswer: 'D'
      },
      {
        department: 'CS',
        question: 'What is DSA?',
        options: {
          A: 'Data Structures and Algorithms',
          B: 'Direct System Access',
          C: 'Dynamic Storage Allocation',
          D: 'Data Science Analytics'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'SQL is used for?',
        options: {
          A: 'Relational databases',
          B: 'NoSQL databases',
          C: 'File systems',
          D: 'Web scraping'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'ArrayList vs LinkedList: Which has faster random access?',
        options: {
          A: 'ArrayList',
          B: 'LinkedList',
          C: 'Both same',
          D: 'Neither'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'React uses?',
        options: {
          A: 'Virtual DOM',
          B: 'Real DOM',
          C: 'Shadow DOM only',
          D: 'No DOM'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'REST API uses which format primarily?',
        options: {
          A: 'JSON',
          B: 'XML',
          C: 'HTML',
          D: 'CSV'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'Git command to get changes from remote?',
        options: {
          A: 'git pull',
          B: 'git push',
          C: 'git fetch',
          D: 'git clone'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'Database Normalization reduces?',
        options: {
          A: 'Redundancy',
          B: 'Speed',
          C: 'Size',
          D: 'Queries'
        },
        correctAnswer: 'A'
      },
      {
        department: 'CS',
        question: 'Polymorphism allows?',
        options: {
          A: 'Same interface, different implementations',
          B: 'Multiple classes',
          C: 'Inheritance only',
          D: 'Static methods'
        },
        correctAnswer: 'A'
      }
    ];

    // EC Questions
    const ecQuestions = [
      {
        department: 'EC',
        question: 'Op-Amp has high?',
        options: {
          A: 'Gain',
          B: 'Noise',
          C: 'Power consumption',
          D: 'Size'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'Analog signals are?',
        options: {
          A: 'Continuous',
          B: 'Discrete',
          C: 'Binary',
          D: 'Digital'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'SR Flip-Flop remembers?',
        options: {
          A: '1 state',
          B: '0 state',
          C: 'Both',
          D: 'Neither'
        },
        correctAnswer: 'C'
      },
      // Add 7 more EC questions similarly...
      {
        department: 'EC',
        question: 'Ohm\'s Law is?',
        options: {
          A: 'V = IR',
          B: 'I = VR',
          C: 'R = VI',
          D: 'V = I + R'
        },
        correctAnswer: 'A'
      }
      // Truncated for brevity; will complete full 10 per dept in actual
    ];

    // EC full (add more)
    ecQuestions.push(
      {
        department: 'EC',
        question: 'What is VLSI?',
        options: {
          A: 'Very Large Scale Integration',
          B: 'Very Low Scale Integration',
          C: 'Variable Large System Interface',
          D: 'Very Large System Integration'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'Flip-Flop types include?',
        options: {
          A: 'SR, JK, D, T',
          B: 'AND, OR, NOT',
          C: 'A, B, C, D',
          D: '1, 2, 3, 4'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'Kirchhoff\'s Voltage Law (KVL)?',
        options: {
          A: 'Sum voltages in loop = 0',
          B: 'Sum currents = 0',
          C: 'Voltage = current * resistance',
          D: 'Power = V*I'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'Multiplexer does?',
        options: {
          A: 'Selects one input to output',
          B: 'Adds numbers',
          C: 'Flips bits',
          D: 'Stores data'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'ADC stands for?',
        options: {
          A: 'Analog to Digital Converter',
          B: 'Advanced Digital Circuit',
          C: 'Analog Device Controller',
          D: 'Automatic Data Conversion'
        },
        correctAnswer: 'A'
      },
      {
        department: 'EC',
        question: 'PCB is?',
        options: {
          A: 'Printed Circuit Board',
          B: 'Personal Computer Board',
          C: 'Power Control Board',
          D: 'Printed Control Board'
        },
        correctAnswer: 'A'
      }
    );

    // Mech Questions
    const mechQuestions = [
      {
        department: 'Mech',
        question: 'Newton\'s 2nd Law?',
        options: {
          A: 'F = ma',
          B: 'E = mc²',
          C: 'V = IR',
          D: 'P = V*I'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: '1st Law of Thermodynamics?',
        options: {
          A: 'ΔU = Q - W',
          B: 'F = ma',
          C: 'E = mc²',
          D: 'PV = nRT'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Bernoulli Equation term ρgh is?',
        options: {
          A: 'Potential energy',
          B: 'Kinetic energy',
          C: 'Pressure',
          D: 'Flow rate'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Hooke\'s Law?',
        options: {
          A: 'σ = Eε',
          B: 'F = ma',
          C: 'P = F/A',
          D: 'τ = rF'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'CNC stands for?',
        options: {
          A: 'Computer Numerical Control',
          B: 'Central Network Control',
          C: 'Computer Network Communication',
          D: 'Central Numerical Computer'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Heat transfer by direct contact?',
        options: {
          A: 'Conduction',
          B: 'Convection',
          C: 'Radiation',
          D: 'Advection'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Gear ratio = ?',
        options: {
          A: 'Driver / Driven teeth',
          B: 'Driven / Driver speed',
          C: 'Torque ratio',
          D: 'Power ratio'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Mohr Circle used for?',
        options: {
          A: 'Stress analysis',
          B: 'Strain calculation',
          C: 'Heat transfer',
          D: 'Fluid flow'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Pelton turbine is?',
        options: {
          A: 'Impulse',
          B: 'Reaction',
          C: 'Axial',
          D: 'Radial'
        },
        correctAnswer: 'A'
      },
      {
        department: 'Mech',
        question: 'Castigliano Theorem for?',
        options: {
          A: 'Deflection',
          B: 'Stress',
          C: 'Strain',
          D: 'Force'
        },
        correctAnswer: 'A'
      }
    ];

    const allQuestions = [...csQuestions, ...ecQuestions, ...mechQuestions];


    await PlacementQuestion.insertMany(allQuestions);
    console.log(`Seeded ${allQuestions.length} questions`);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.connection.close();
  });

