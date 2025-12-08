import Panoram from "../Panoram/Panoram"


const descriptions = [
	// I Block (1**)
	{
		id: 110,
		title: 'I Block',
		description:
			'I Block is a newly built, modern space created specifically to support innovation, creativity, and student collaboration. \n\n' +
			'Sponsored and developed by Freedom Holding Corp, this block represents a new generation of university infrastructure, fully equipped with AI-powered zones, open learning spaces, and advanced facilities.\n' +
			'It offers a flexible environment where students can study, work individually or in teams, explore new technologies, and comfortably relax between classes in a completely new and inspiring atmosphere.',
		images: ['/photos/iblockfre.jpg', '/photos/iclass.jpg'],
	},
	{
		id: 112,
		title: 'I Block',
		description:
			'I Block is a newly built, modern space created specifically to support innovation, creativity, and student collaboration. \n\n' +
			'Sponsored and developed by Freedom Holding Corp, this block represents a new generation of university infrastructure, fully equipped with AI-powered zones, open learning spaces, and advanced facilities.\n' +
			'It offers a flexible environment where students can study, work individually or in teams, explore new technologies, and comfortably relax between classes in a completely new and inspiring atmosphere.',
		images: ['/photos/iblockfre.jpg', '/photos/iclass.jpg'],
	},
	{
		id: 120,
		title: 'I Block',
		description:
			'I Block is a newly built, modern space created specifically to support innovation, creativity, and student collaboration. \n\n' +
			'Sponsored and developed by Freedom Holding Corp, this block represents a new generation of university infrastructure, fully equipped with AI-powered zones, open learning spaces, and advanced facilities.\n' +
			'It offers a flexible environment where students can study, work individually or in teams, explore new technologies, and comfortably relax between classes in a completely new and inspiring atmosphere.',
		images: ['/photos/iblockfre.jpg', '/photos/iclass.jpg'],
	},
	{
		id: 130,
		title: 'I Block',
		description:
			'I Block is a newly built, modern space created specifically to support innovation, creativity, and student collaboration. \n\n' +
			'Sponsored and developed by Freedom Holding Corp, this block represents a new generation of university infrastructure, fully equipped with AI-powered zones, open learning spaces, and advanced facilities.\n' +
			'It offers a flexible environment where students can study, work individually or in teams, explore new technologies, and comfortably relax between classes in a completely new and inspiring atmosphere.',
		images: ['/photos/iblockfre.jpg', '/photos/iclass.jpg'],
	},
	// H Block (2**)
	{
		id: 200,
		title: 'H Block',
		description:
			'H Block is part of the Multidisciplinary Education Faculty and serves as a core academic space for diverse fields of study.\n\n' +
			'It hosts classrooms and lecture halls where students attend lectures, participate in seminars, and engage in interdisciplinary learning activities.\n' +
			'The block is equipped with modern academic facilities that support daily educational processes and collaborative learning.',
		images: ['/photos/hhall.jpg', '/photos/gStairs.jpg'],
	},
	{
		id: 210,
		title: 'H Block',
		description:
			'H Block is part of the Multidisciplinary Education Faculty and serves as a core academic space for diverse fields of study.\n\n' +
			'It hosts classrooms and lecture halls where students attend lectures, participate in seminars, and engage in interdisciplinary learning activities.\n' +
			'The block is equipped with modern academic facilities that support daily educational processes and collaborative learning.',
		images: ['/photos/hhall.jpg', '/photos/gStairs.jpg'],
	},
	{
		id: 220,
		title: 'H Block',
		description:
			'H Block is part of the Multidisciplinary Education Faculty and serves as a core academic space for diverse fields of study.\n\n' +
			'It hosts classrooms and lecture halls where students attend lectures, participate in seminars, and engage in interdisciplinary learning activities.\n' +
			'The block is equipped with modern academic facilities that support daily educational processes and collaborative learning.',
		images: ['/photos/hhall.jpg', '/photos/gStairs.jpg'],
	},
	{
		id: 230,
		title: 'H Block',
		description:
			'H Block is part of the Multidisciplinary Education Faculty and serves as a core academic space for diverse fields of study.\n\n' +
			'It hosts classrooms and lecture halls where students attend lectures, participate in seminars, and engage in interdisciplinary learning activities.\n' +
			'The block is equipped with modern academic facilities that support daily educational processes and collaborative learning.',
		images: ['/photos/hhall.jpg', '/photos/gStairs.jpg'],
	},
	// G Block (3**)
	{
		id: 310,
		title: 'G Block',
		description:
			'G Block is home to the Business School and serves as a central academic hub for business-related education.\n\n' +
			'It hosts lectures, practical classes, and seminars focused on management, finance, entrepreneurship, and economics.\n' +
			'The block provides modern classrooms and learning spaces designed to support professional development and applied business studies.',
		images: ['/photos/gStairs.jpg', '/photos/goutside.jpg'],
	},
	{
		id: 312,
		title: 'G Block',
		description:
			'G Block is home to the Business School and serves as a central academic hub for business-related education.\n\n' +
			'It hosts lectures, practical classes, and seminars focused on management, finance, entrepreneurship, and economics.\n' +
			'The block provides modern classrooms and learning spaces designed to support professional development and applied business studies.',
		images: ['/photos/gStairs.jpg', '/photos/goutside.jpg'],
	},
	{
		id: 320,
		title: 'G Block',
		description:
			'G Block is home to the Business School and serves as a central academic hub for business-related education.\n\n' +
			'It hosts lectures, practical classes, and seminars focused on management, finance, entrepreneurship, and economics.\n' +
			'The block provides modern classrooms and learning spaces designed to support professional development and applied business studies.',
		images: ['/photos/gStairs.jpg', '/photos/goutside.jpg'],
	},
	{
		id: 330,
		title: 'G Block',
		description:
			'G Block is home to the Business School and serves as a central academic hub for business-related education.\n\n' +
			'It hosts lectures, practical classes, and seminars focused on management, finance, entrepreneurship, and economics.\n' +
			'The block provides modern classrooms and learning spaces designed to support professional development and applied business studies.',
		images: ['/photos/gStairs.jpg', '/photos/goutside.jpg'],
	},
	// F Block (4**)
	{
		id: 410,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n' +
			'Students studying computer science, software engineering, and related disciplines attend lectures, practical sessions, and actively work on individual and team-based projects here.',
		images: ['/photos/fblock.jpg', '/photos/fblock1.jpg'],
	},
	{
		id: 412,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n\n' +
			'F Block also features a student kitchen area where students can take a break and enjoy meals. Affordable complex lunches are available for 1850 KZT, with tea and compote provided free of charge, creating a comfortable space for rest and social interaction.',
		images: ['/photos/kitchen.jpg', '/photos/kitchen1.jpg'],
	},
	{
		id: 414,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n\n' +
			'F Block also features a student kitchen area where students can take a break and enjoy meals. Affordable complex lunches are available for 1850 KZT, with tea and compote provided free of charge, creating a comfortable space for rest and social interaction.',
		images: ['/photos/redcoffee.jpg', '/photos/redcoffee1.jpg'],
	},
	{
		id: 415,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n\n' +
			'F Block also features a student kitchen area where students can take a break and enjoy meals. Affordable complex lunches are available for 1850 KZT, with tea and compote provided free of charge, creating a comfortable space for rest and social interaction.',
		images: ['/photos/fcanteen.jpg', '/photos/canteen1.jpg'],
	},
	{
		id: 420,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n' +
			'Students studying computer science, software engineering, and related disciplines attend lectures, practical sessions, and actively work on individual and team-based projects here.',
		images: ['/photos/fblock.jpg', '/photos/fblock1.jpg'],
	},
	{
		id: 430,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n' +
			'Students studying computer science, software engineering, and related disciplines attend lectures, practical sessions, and actively work on individual and team-based projects here.',
		images: ['/photos/fblock.jpg', '/photos/fblock1.jpg'],
	},
	{
		id: 432,
		title: 'F Block',
		description:
			'F Block is dedicated to information technology and computer science, serving as a key academic space for technology-focused education.\n\n' +
			'The building houses IT classrooms, programming laboratories, and specialized facilities equipped for hands-on technical learning.\n' +
			'Students studying computer science, software engineering, and related disciplines attend lectures, practical sessions, and actively work on individual and team-based projects here.',
		images: ['/photos/fblock.jpg', '/photos/fblock1.jpg'],
	},
	// E Block (5**)
	{
		id: 500,
		title: 'E Block',
		description:
			'E Block is the Pedagogical Block, designed to support education and teacher training programs. Throughout the day, students from various disciplines attend lectures and practical sessions here. The building features well-equipped classrooms and lecture halls, fostering an environment for interactive learning and academic growth.\n\n' +
			'Additionally, E Block provides cozy common areas where students can collaborate, discuss ideas, and relax between classes.',
		images: ['/photos/lection.jpg', '/photos/dblock.jpg'],
	},
	{
		id: 510,
		title: 'E Block',
		description:
			'E Block is the Pedagogical Block, designed to support education and teacher training programs. Throughout the day, students from various disciplines attend lectures and practical sessions here. The building features well-equipped classrooms and lecture halls, fostering an environment for interactive learning and academic growth.\n\n' +
			'Additionally, E Block provides cozy common areas where students can collaborate, discuss ideas, and relax between classes.',
		images: ['/photos/lection.jpg', '/photos/dblock.jpg'],
	},
	{
		id: 520,
		title: 'E Block',
		description:
			'E Block is the Pedagogical Block, designed to support education and teacher training programs. Throughout the day, students from various disciplines attend lectures and practical sessions here. The building features well-equipped classrooms and lecture halls, fostering an environment for interactive learning and academic growth.\n\n' +
			'Additionally, E Block provides cozy common areas where students can collaborate, discuss ideas, and relax between classes.',
		images: ['/photos/lection.jpg', '/photos/dblock.jpg'],
	},
	{
		id: 530,
		title: 'E Block',
		description:
			'E Block is the Pedagogical Block, designed to support education and teacher training programs. Throughout the day, students from various disciplines attend lectures and practical sessions here. The building features well-equipped classrooms and lecture halls, fostering an environment for interactive learning and academic growth.\n\n' +
			'Additionally, E Block provides cozy common areas where students can collaborate, discuss ideas, and relax between classes.',
		images: ['/photos/lection.jpg', '/photos/dblock.jpg'],
	},
	{
		id: 532,
		title: 'E Block',
		description:
			'E Block is the Pedagogical Block, designed to support education and teacher training programs. Throughout the day, students from various disciplines attend lectures and practical sessions here. The building features well-equipped classrooms and lecture halls, fostering an environment for interactive learning and academic growth.\n\n' +
			'Additionally, E Block provides cozy common areas where students can collaborate, discuss ideas, and relax between classes.',
		images: ['/photos/lection.jpg', '/photos/dblock.jpg'],
	},
	// D Block (6**)
	{
		id: 610,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 611,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 612,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 613,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 614,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 620,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 630,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	{
		id: 632,
		title: 'D Block',
		description:
			'D Block is dedicated to Law and Science, serving as a versatile academic building for students from various programs. Throughout the day, students attend lectures and practical sessions in well-equipped classrooms and lecture halls that support regular academic activities and everyday learning.\n\n' +
			'D Block provides specialized laboratories and resources for scientific research and legal studies, allowing students to engage in hands-on learning and experiments.\n\n' +
			'Additionally, the block includes comfortable common areas where students can collaborate, hold discussions, or take a short break between classes.',
		images: ['/photos/dblock1.jpg', '/photos/lection.jpg'],
	},
	// Lobby (7**)
	{
		id: 710,
		title: 'Main Lobby',
		description:
			'The main lobby is a bright and welcoming central hub of the campus, designed to greet students and visitors alike. Its modern architecture and abundant natural lighting create an inviting atmosphere.\n\n' +
			'Comfortable seating areas are available for relaxation, informal meetings, and social interactions throughout the day.\n\n' +
			'The lobby also serves as an information point and a starting place for navigating the campus, making it a lively and functional space for everyone.',
		images: ['/photos/wifi1.jpg', '/photos/wifi.jpg'],
	},
	{
		id: 712,
		title: 'Main Lobby',
		description:
			'The main lobby is a bright and welcoming central hub of the campus, designed to greet students and visitors alike. Its modern architecture and abundant natural lighting create an inviting atmosphere.\n\n' +
			'Comfortable seating areas are available for relaxation, informal meetings, and social interactions throughout the day.\n\n' +
			'The lobby also serves as an information point and a starting place for navigating the campus, making it a lively and functional space for everyone.',
		images: ['/photos/wifi1.jpg', '/photos/wifi.jpg'],
	},
	{
		id: 713,
		title: 'Main Lobby',
		description:
			'The main lobby is a bright and welcoming central hub of the campus, designed to greet students and visitors alike. Its modern architecture and abundant natural lighting create an inviting atmosphere.\n\n' +
			'Comfortable seating areas are available for relaxation, informal meetings, and social interactions throughout the day.\n\n' +
			'The lobby also serves as an information point and a starting place for navigating the campus, making it a lively and functional space for everyone.',
		images: ['/photos/wifi1.jpg', '/photos/wifi.jpg'],
	},
	// Library (8**)
	{
		id: 800,
		title: 'Library',
		description:
			"Our library offers a quiet and cozy environment perfect for studying and research. It features extensive collections of books, journals, and digital resources to support students' academic needs.\n\n" +
			'Modern facilities and technology-enhanced study areas allow for efficient research and collaborative learning.\n\n' +
			'Comfortable reading spaces provide a relaxing atmosphere where students can focus, reflect, and engage deeply with their studies.',
		images: ['/photos/lib0.jpg', '/photos/lib01.jpg'],
	},
	{
		id: 810,
		title: 'Library',
		description:
			"Our library offers a quiet and cozy environment perfect for studying and research. It features extensive collections of books, journals, and digital resources to support students' academic needs.\n\n" +
			'Modern facilities and technology-enhanced study areas allow for efficient research and collaborative learning.\n\n' +
			'Comfortable reading spaces provide a relaxing atmosphere where students can focus, reflect, and engage deeply with their studies.',
		images: ['/photos/lib1.jpg', '/photos/lib11.jpg'],
	},
	{
		id: 813,
		title: 'Library',
		description:
			"Our library offers a quiet and cozy environment perfect for studying and research. It features extensive collections of books, journals, and digital resources to support students' academic needs.\n\n" +
			'Modern facilities and technology-enhanced study areas allow for efficient research and collaborative learning.\n\n' +
			'Comfortable reading spaces provide a relaxing atmosphere where students can focus, reflect, and engage deeply with their studies.',
		images: ['/photos/lib2.jpg', '/photos/lib11.jpg'],
	},
	// Dormitory (9**)
	{
		id: 901,
		title: 'Dormitory',
		description:
			'The dormitory provides comfortable living spaces for students on campus. It offers fully equipped residential facilities where students can rest, study, and socialize.\n\n' +
			'The building is designed to create a home-like atmosphere that fosters a sense of community and belonging among residents.\n\n' +
			'Additional common areas and study rooms support academic success while promoting personal well-being throughout the academic year.',
		images: ['/photos/dormshop.jpg', '/photos/dorminner.png'],
	},
	{
		id: 902,
		title: 'Dormitory',
		description:
			'The dormitory provides comfortable living spaces for students on campus. It offers fully equipped residential facilities where students can rest, study, and socialize.\n\n' +
			'The building is designed to create a home-like atmosphere that fosters a sense of community and belonging among residents.\n\n' +
			'Additional common areas and study rooms support academic success while promoting personal well-being throughout the academic year.',
		images: ['/photos/dormoutside.png', '/photos/dorminner.png'],
	},
	{
		id: 903,
		title: 'Dormitory',
		description:
			'The dormitory provides comfortable living spaces for students on campus. It offers fully equipped residential facilities where students can rest, study, and socialize.\n\n' +
			'The building is designed to create a home-like atmosphere that fosters a sense of community and belonging among residents.\n\n' +
			'Additional common areas and study rooms support academic success while promoting personal well-being throughout the academic year.',
		images: ['/photos/dormoutside.png', '/photos/dorminner.png'],
	},
	{
		id: 904,
		title: 'Dormitory',
		description:
			'The dormitory provides comfortable living spaces for students on campus. It offers fully equipped residential facilities where students can rest, study, and socialize.\n\n' +
			'The building is designed to create a home-like atmosphere that fosters a sense of community and belonging among residents.\n\n' +
			'Additional common areas and study rooms support academic success while promoting personal well-being throughout the academic year.',
		images: ['/photos/dormgym.jpg', '/photos/dormoutside.png'],
	},
	// SduLife
	{
		id: 11,
		title: 'SduLife',
		description:
			'SduLife is a recreational area on campus where students can engage in various activities and socialize. It offers spaces for relaxation, sports, and informal gatherings.\n\n' +
			'The area hosts community events and activities that encourage interaction and teamwork among students.\n\n' +
			'SduLife serves as a vibrant hub where students can unwind, meet friends, and actively participate in campus life.',
		images: ['/photos/basketball.jpg', '/photos/football.jpg'],
	},
	{
		id: 12,
		title: 'SduLife',
		description:
			'SduLife is a recreational area on campus where students can engage in various activities and socialize. It offers spaces for relaxation, sports, and informal gatherings.\n\n' +
			'The area hosts community events and activities that encourage interaction and teamwork among students.\n\n' +
			'SduLife serves as a vibrant hub where students can unwind, meet friends, and actively participate in campus life.',
		images: ['/photos/lifetoilet.jpg', '/photos/liferaz.jpg'],
	},
	{
		id: 13,
		title: 'SduLife',
		description:
			'SduLife is a recreational area on campus where students can engage in various activities and socialize. It offers spaces for relaxation, sports, and informal gatherings.\n\n' +
			'The area hosts community events and activities that encourage interaction and teamwork among students.\n\n' +
			'SduLife serves as a vibrant hub where students can unwind, meet friends, and actively participate in campus life.',
		images: ['/photos/basketball.jpg', '/photos/football.jpg'],
	},
	{
		id: 14,
		title: 'SduLife',
		description:
			'SduLife is a recreational area on campus where students can engage in various activities and socialize. It offers spaces for relaxation, sports, and informal gatherings.\n\n' +
			'The area hosts community events and activities that encourage interaction and teamwork among students.\n\n' +
			'SduLife serves as a vibrant hub where students can unwind, meet friends, and actively participate in campus life.',
		images: ['/photos/lifetoilet.jpg', '/photos/liferaz.jpg'],
	},
]

export default descriptions
