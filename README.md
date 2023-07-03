# AI Summarizer

The AI Summarizer is an application designed to provide efficient article summarization. It utilizes cutting-edge artificial intelligence techniques to analyze the content of articles and generate concise summaries. The application is built using Node.js, JavaScript, React.js, Express, and MongoDB.


![React App - Brave 03-07-2023 17_36_32](https://github.com/Aman0246/Ai-Summarizer/assets/130737436/fa32bd43-8292-4be9-8a5f-3ec0e0bf2cc8)

![React App - Brave 03-07-2023 17_37_19](https://github.com/Aman0246/Ai-Summarizer/assets/130737436/a75845bf-97f2-442d-891d-c964755bfd30)

## Feature
s

- Summarize Articles: The AI Summarizer can process articles and generate summaries that capture the essence of the content.
- Link/URL Input: Users can provide the link or URL of an article to be summarized.
- Save Summaries: Summaries can be saved to a MongoDB database for future reference.

## Installation

To install and run the AI Summarizer locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/ai-summarizer.git
   ```

2. Navigate to the project directory:

   ```
   cd ai-summarizer
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up the MongoDB database:

   - Install MongoDB and make sure it is running on your system.
   - Create a `.env` file in the project root directory.
   - Add the following line to the `.env` file:

     ```
     MONGODB_URI=your-mongodb-connection-uri
     ```

5. Start the development server:

   ```
   npm start
   ```

6. Access the AI Summarizer application in your browser at `http://localhost:3000`.

## Usage

1. Enter the link or URL of the article you want to summarize in the input field.
2. Click the "Summarize" button.
3. The AI Summarizer will process the article and generate a summary.
4. You can save the summary by clicking the "Save" button.

## Contribution

Contributions to the AI Summarizer project are always welcome. If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
