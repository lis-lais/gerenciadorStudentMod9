let count = 0;

function generateRegistration(course) {
    const coursePrefix = course.substring(0, 3).toUpperCase();
    counter++;
    return `${coursePrefix}${counter.toString().padStart(3, '0')}`;
};

module.exports = {generateRegistration};