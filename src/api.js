import axios from "axios";

export const getQuiz = async (videoId) => {
  //   let response = {};
  try {
    let response = await axios.get(
      "http://1dbb-34-87-186-180.ngrok.io/?video_id=" + videoId
    );
    console.log("response received");
    response = JSON.stringify(response);
    response = JSON.parse(response);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

// {
//     questions: [
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Apple",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Mango",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Banana",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Apple",
//       },
//       {
//         question: "Select one of the following",
//         options: ["Apple", "Mango", "Banana"],
//         answer: "Mango",
//       },
//     ],
//     summaries: [
//       `There are multiple ways to generate lorem ipsum text in VS Code.
//                 For example, you can use the built-in Emmet extension.
//                 Open an HTML file, start typing lorem and click on the option.`,
//       `There are multiple ways to generate lorem ipsum text in VS Code.
//                 For example, you can use the built-in Emmet extension.
//                 Open an HTML file, start typing lorem and click on the option.`,
//       `There are multiple ways to generate lorem ipsum text in VS Code.
//                 For example, you can use the built-in Emmet extension.
//                 Open an HTML file, start typing lorem and click on the option.`,
//     ],
//     urls: [
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//       "https://www.youtube.com/embed/tgbNymZ7vqY",
//     ],
//   };
