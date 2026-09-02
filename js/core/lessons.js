window.LESSONS_DATA = window.LESSONS_DATA || [];

const LessonsModule = {
    getAllLessons: function() { 
        return window.LESSONS_DATA;
    },
    
    getLessonById: function(id) { 
        const stringId = String(id).toLowerCase();
        const lesson = window.LESSONS_DATA.find(l => String(l.id).toLowerCase() === stringId);
        
        if (!lesson) return null;
        
        const lessonCopy = { ...lesson };
        
        if (typeof lesson.getDynamicQuestions === 'function') {
            lessonCopy.questionBank = lesson.getDynamicQuestions();
            lessonCopy.quizzes = lessonCopy.questionBank;
            return lessonCopy;
        }

        const rawQuestions = lessonCopy.questionBank || lessonCopy.quizzes || lessonCopy.questions || [];
        const questions = JSON.parse(JSON.stringify(rawQuestions));
        
        const shuffleArray = (array) => {
            let currentIndex = array.length, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        };

        const shuffledQuestions = shuffleArray(questions);
        lessonCopy.questionBank = shuffledQuestions.slice(0, 10);
        lessonCopy.quizzes = lessonCopy.questionBank;
        
        return lessonCopy;
    }
};

function getAllLessons() { return LessonsModule.getAllLessons(); }
function getLessonById(id) { return LessonsModule.getLessonById(id); }
