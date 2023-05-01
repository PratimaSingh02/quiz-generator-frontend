import axios from "axios";

export const getQuiz = async () => {
    const response = [
        {
            question: "Select one of the following",
            options: ["Apple", "Mango", "Banana"],
            answer: 2
        },
        {
            question: "Select one of the following",
            options: ["Apple", "Mango", "Banana"],
            answer: 1
        },
        {
            question: "Select one of the following",
            options: ["Apple", "Mango", "Banana"],
            answer: 3
        },
        {
            question: "Select one of the following",
            options: ["Apple", "Mango", "Banana"],
            answer: 1
        },
        {
            question: "Select one of the following",
            options: ["Apple", "Mango", "Banana"],
            answer: 3
        },
    ];
    try {
        // response = await axios.get();
    } catch (error) {

    }
    return response;
}

export const getSummary = async () => {
    const response = [
        `There are multiple ways to generate lorem ipsum text in VS Code.
                For example, you can use the built-in Emmet extension.
                Open an HTML file, start typing lorem and click on the option.`,
        `There are multiple ways to generate lorem ipsum text in VS Code.
                For example, you can use the built-in Emmet extension.
                Open an HTML file, start typing lorem and click on the option.`,
        `There are multiple ways to generate lorem ipsum text in VS Code.
                For example, you can use the built-in Emmet extension.
                Open an HTML file, start typing lorem and click on the option.`,
    ];
    try {
        // response = await axios.get();
    } catch (error) {

    }
    return response;
}

export const getRecommendations = async () => {
    const response = [
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/tgbNymZ7vqY",
    ];
    try {
        // response = await axios.get();
    } catch (error) {

    }
    return response;
}