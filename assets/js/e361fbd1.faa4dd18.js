"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[561],{24680:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"about","metadata":{"permalink":"/einstein-platform/about","source":"@site/cookbook/about.md","title":"About the Cookbook \ud83d\udcd6","description":"The Einstein Platform Cookbook is where Salesforce shares example code and recipes for building with the Einstein Platform. This website is generated based on the contents of the open source einstein-platform repository on GitHub.","date":"2024-09-09T00:00:00.000Z","tags":[{"inline":false,"label":"welcome","permalink":"/einstein-platform/tags/welcome"}],"readingTime":0.675,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"about","title":"About the Cookbook \ud83d\udcd6","tags":["welcome"],"date":"2024-09-09T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Introducing the LLM Open Connector","permalink":"/einstein-platform/open-connector"}},"content":"The [Einstein Platform Cookbook](https://opensource.salesforce.com/einstein-platform/) is where Salesforce shares example code and recipes for building with the Einstein Platform. This website is generated based on the contents of the open source [einstein-platform](https://github.com/salesforce/einstein-platform) repository on GitHub.\\n\\nOur first batch of recipes have arrived! These recipes include step-by-step instructions for implementing the LLM Open Connector ([readme](https://github.com/salesforce/einstein-platform?tab=readme-ov-file#llm-open-connector), [spec](/docs/apis/llm-open-connector)) with an API gateway, and each recipe features a different AI platform. More recipes are in the works featuring new AI platforms and system architectures!\\n\\nYour contributions to the Cookbook and the open-source repository are welcome! Refer to the [Contributing Guide](https://github.com/salesforce/einstein-platform/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/salesforce/einstein-platform/blob/main/CODE_OF_CONDUCT.md) to get started.\\n\\nIf you like the resources that you see here, consider adding a \u2b50 on GitHub. It helps other people discover them!\\n\\nSee Also:\\n\\n- [Generative AI Developer Guide](https://developer.salesforce.com/docs/einstein/genai/overview)\\n- [Einstein Platform GitHub Repo](https://github.com/salesforce/einstein-platform)"},{"id":"open-connector","metadata":{"permalink":"/einstein-platform/open-connector","source":"@site/cookbook/open-connector.md","title":"Introducing the LLM Open Connector","description":"The LLM Open Connector is an API specification, closely based on the OpenAI API, that lets you create API gateways and proxy servers that connect any language model to the Einstein AI Platform. Any service that implements the API specification can be connected to Einstein Studio using the Bring Your Own LLM (BYOLLM) feature.","date":"2024-09-10T00:00:00.000Z","tags":[{"inline":false,"label":"llm-open-connector","permalink":"/einstein-platform/tags/llm-open-connector"}],"readingTime":0.45,"hasTruncateMarker":false,"authors":[{"name":"Darvish","title":"Director, Product Management @ Salesforce","url":"https://github.com/dshadravan","page":{"permalink":"/einstein-platform/authors/dshadravan"},"socials":{"github":"https://github.com/dshadravan"},"imageURL":"https://github.com/dshadravan.png","key":"dshadravan"},{"name":"Oleksandr","title":"Software Engineer @ Salesforce","url":"https://github.com/oleksm","page":{"permalink":"/einstein-platform/authors/oleksm"},"socials":{"github":"https://github.com/oleksm"},"imageURL":"https://github.com/oleksm.png","key":"oleksm"}],"frontMatter":{"authors":["dshadravan","oleksm"],"date":"2024-09-10T00:00:00.000Z","slug":"open-connector","tags":["llm-open-connector"]},"unlisted":false,"prevItem":{"title":"About the Cookbook \ud83d\udcd6","permalink":"/einstein-platform/about"},"nextItem":{"title":"LLM Open Connector + AWS","permalink":"/einstein-platform/aws"}},"content":"The LLM Open Connector is an [API specification](/docs/apis/llm-open-connector/), closely based on the OpenAI API, that lets you create API gateways and proxy servers that connect any language model to the Einstein AI Platform. Any service that implements the API specification can be connected to Einstein Studio using the Bring Your Own LLM (BYOLLM) feature.\\n\\nThe LLM Open Connector opens up a world of possibilities for bespoke AI applications for Salesforce customers and independent software vendors (ISVs). Check out our recipes to learn how to bring new models to Einstein Studio!"},{"id":"aws","metadata":{"permalink":"/einstein-platform/aws","source":"@site/cookbook/llm-open-connector-aws.md","title":"LLM Open Connector + AWS","description":"Learn how to implement Salesforce\'s LLM Open Connector using Amazon Web Services (AWS). We use Amazon Bedrock to host a Llama model from Meta, a Lambda for serverless compute, and an API Gateway to expose our API.","date":"2024-09-13T00:00:00.000Z","tags":[{"inline":false,"label":"aws","permalink":"/einstein-platform/tags/aws"},{"inline":false,"label":"bedrock","permalink":"/einstein-platform/tags/bedrock"},{"inline":false,"label":"llm-open-connector","permalink":"/einstein-platform/tags/llm-open-connector"}],"readingTime":4.24,"hasTruncateMarker":true,"authors":[{"name":"Richard","title":"Technical Writer @ Salesforce","url":"https://github.com/rsexton404","page":{"permalink":"/einstein-platform/authors/rsexton"},"socials":{"github":"https://github.com/rsexton404"},"imageURL":"https://github.com/rsexton404.png","key":"rsexton"}],"frontMatter":{"slug":"aws","authors":["rsexton"],"tags":["aws","bedrock","llm-open-connector"],"date":"2024-09-13T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Introducing the LLM Open Connector","permalink":"/einstein-platform/open-connector"},"nextItem":{"title":"LLM Open Connector + Groq","permalink":"/einstein-platform/groq"}},"content":"Learn how to implement Salesforce\'s [LLM Open Connector](/docs/apis/llm-open-connector/) using Amazon Web Services (AWS). We use Amazon Bedrock to host a Llama model from Meta, a Lambda for serverless compute, and an API Gateway to expose our API.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Prerequisites\\n\\n1. AWS Account with appropriate permissions\\n2. AWS CLI. For installation instructions, see [Install or update to the latest version of the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [Set up the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html).\\n3. Python 3.9 or later\\n4. AWS CDK installed (`npm install -g aws-cdk`)\\n5. Access to AWS Bedrock (you may need to request access if it\'s not enabled in your account)\\n\\n## Set Up AWS Bedrock and Model Access\\n\\nBefore deploying and using the LLM Open Connector, you need to set up access to AWS Bedrock and enable the specific model you want to use. Follow these steps:\\n\\n**Enable AWS Bedrock:**\\n\\n- Go to the [AWS Bedrock console](https://console.aws.amazon.com/bedrock).\\n- If you see a \\"Get started\\" button, click it to enable Bedrock for your account.\\n- If Bedrock is already enabled, you\'ll see the Bedrock dashboard.\\n\\n**Request access to models:**\\n\\n- In the Bedrock console, go to \\"Model access\\" in the left navigation pane.\\n- Find the model you want to use (for example, Llama 3.1 70B Instruct).\\n- Click the menu (three dots) and select \\"Request model access\\".\\n- Verify that the model is selected and click **Next**.\\n- Read and accept the terms and conditions, then click **Submit**.\\n- Wait for your request to be approved. This is usually instant for most models.\\n\\n## Installation\\n\\n1. Create a new local directory for your project and navigate to it:\\n\\n   ```\\n   mkdir aws-bedrock-llama-connector\\n   cd aws-bedrock-llama-connector\\n   ```\\n\\n2. Download from the einstein-platform repository:\\n\\n   - [lib/aws_bedrock_llama_connector_stack.py](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/lib/aws_bedrock_llama_connector_stack.py)\\n   - [lambda/handler.py](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/lambda/handler.py)\\n   - [app.py](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/app.py)\\n   - [cdk.json](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/cdk.json)\\n   - [index.html](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/index.html)\\n   - [requirements.txt](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/requirements.txt)\\n\\n3. Copy the downloaded files into your project directory.\\n\\n4. Create a virtual environment and install Python dependencies:\\n\\n   ```\\n   python -m venv venv\\n   source venv/bin/activate  # On Windows, use `venv\\\\Scripts\\\\activate`\\n   pip install -r requirements.txt\\n   ```\\n\\n## Project Structure\\n\\nYour project structure should now look like this:\\n\\n```\\naws-bedrock-llama-connector/\\n\u251c\u2500\u2500 lib/\\n\u2502   \u2514\u2500\u2500 aws_bedrock_llama_connector_stack.py\\n\u251c\u2500\u2500 lambda/\\n\u2502   \u2514\u2500\u2500 handler.py\\n\u251c\u2500\u2500 app.py\\n\u251c\u2500\u2500 cdk.json\\n\u251c\u2500\u2500 index.html\\n\u2514\u2500\u2500 requirements.txt\\n```\\n\\n## Deployment\\n\\n1. Configure AWS CLI with your credentials:\\n\\n   ```\\n   aws configure\\n   ```\\n\\n2. Bootstrap your AWS environment (if you haven\'t already):\\n\\n   ```\\n   cdk bootstrap\\n   ```\\n\\n3. Deploy the stack:\\n\\n   ```\\n   cdk deploy\\n   ```\\n\\n4. After deployment, CDK will output the API Gateway URL. You can use this URL to make requests to your Llama model.\\n\\n## Usage\\n\\nTo use the deployed API, send a POST request to the `/chat/completions` endpoint with the following JSON structure:\\n\\n```json\\n{\\n  \\"messages\\": [\\n    { \\"role\\": \\"system\\", \\"content\\": \\"You are a helpful assistant.\\" },\\n    { \\"role\\": \\"user\\", \\"content\\": \\"Tell me a joke about programming.\\" }\\n  ],\\n  \\"temperature\\": 0.7\\n}\\n```\\n\\nYou can use tools like cUrl, Postman, or any programming language to make HTTP requests to your API.\\n\\n### Example using cUrl\\n\\nHere\'s an example cUrl command to test your API:\\n\\n```bash\\ncurl -X POST https://your-api-id.execute-api.your-region.amazonaws.com/prod/chat/completions \\\\\\n-H \\"Content-Type: application/json\\" \\\\\\n-d \'{\\n  \\"messages\\": [\\n    {\\"role\\": \\"system\\", \\"content\\": \\"You are a helpful assistant.\\"},\\n    {\\"role\\": \\"user\\", \\"content\\": \\"Tell me a joke about programming.\\"}\\n  ],\\n  \\"temperature\\": 0.7\\n}\'\\n```\\n\\nReplace `https://your-api-id.execute-api.your-region.amazonaws.com/prod` with the actual URL of your deployed API Gateway, which you can find in the AWS Console or in the output of the `cdk deploy` command.\\n\\nThis cUrl command sends a POST request to your API with the specified JSON payload. The API should respond with a JSON object containing the generated text from the Llama model.\\n\\n**Note**: If you\'re using Windows Command Prompt, you may need to escape the double quotes in the JSON payload differently. For PowerShell or bash on Windows (e.g., Git Bash), the command should work as written above.\\n\\n## Testing with a Web UI\\n\\nUse the included [index.html](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-aws/index.html) file to test your API gateway with a web UI.\\n\\nBefore using the web UI, edit the file and replace `https://your-api-id.execute-api.your-region.amazonaws.com/prod` with the actual URL of your deployed API Gateway, which you can find in the AWS Console or in the output of the `cdk deploy` command.\\n\\n## Notes\\n\\n1. This cookbook uses the `meta.llama3-1-70b-instruct-v1:0` model as a placeholder. You can replace it with any supported model that you have been granted access to in Amazon Bedrock. For a list of supported model IDs, see [Amazon Bedrock model IDs](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html).\\n2. The token count in the response is set to -1 as AWS Bedrock doesn\'t provide token usage information. You may need to implement your own token counting logic if required.\\n3. Error handling and input validation should be improved for production use.\\n4. Consider disabling CORS.\\n5. Consider implementing authentication and rate limiting for your API Gateway.\\n6. Monitor your AWS usage to manage costs, especially if you expect high traffic.\\n\\n## Conclusion\\n\\nThis cookbook demonstrates how to set up an LLM Open Connector using AWS Bedrock, Lambda, and API Gateway. It provides a serverless, scalable solution for integrating Llama models into your applications. Remember to optimize your implementation based on your specific requirements and expected usage patterns."},{"id":"groq","metadata":{"permalink":"/einstein-platform/groq","source":"@site/cookbook/llm-open-connector-groq.md","title":"LLM Open Connector + Groq","description":"Learn how to implement Salesforce\'s LLM Open Connector with the Groq platform for fast AI inference. We also cover how to deploy the connector as a Flask app on Heroku with a simple web UI for testing.","date":"2024-09-14T00:00:00.000Z","tags":[{"inline":false,"label":"groq","permalink":"/einstein-platform/tags/groq"},{"inline":false,"label":"heroku","permalink":"/einstein-platform/tags/heroku"},{"inline":false,"label":"llm-open-connector","permalink":"/einstein-platform/tags/llm-open-connector"}],"readingTime":3.765,"hasTruncateMarker":true,"authors":[{"name":"Richard","title":"Technical Writer @ Salesforce","url":"https://github.com/rsexton404","page":{"permalink":"/einstein-platform/authors/rsexton"},"socials":{"github":"https://github.com/rsexton404"},"imageURL":"https://github.com/rsexton404.png","key":"rsexton"}],"frontMatter":{"slug":"groq","authors":["rsexton"],"tags":["groq","heroku","llm-open-connector"],"date":"2024-09-14T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"LLM Open Connector + AWS","permalink":"/einstein-platform/aws"},"nextItem":{"title":"LLM Open Connector + SambaNova","permalink":"/einstein-platform/sambanova"}},"content":"Learn how to implement Salesforce\'s [LLM Open Connector](/docs/apis/llm-open-connector/) with the [Groq](https://groq.com/) platform for fast AI inference. We also cover how to deploy the connector as a Flask app on Heroku with a simple web UI for testing.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Prerequisites\\n\\nBefore you begin, make sure that your local environment meets these prerequisites.\\n\\n1. Python 3.9 or later installed on your local machine\\n2. A Heroku account (sign up at https://signup.heroku.com/)\\n3. Heroku CLI installed (https://devcenter.heroku.com/articles/heroku-cli)\\n4. Git installed on your local machine\\n5. A Groq API key (sign up at https://console.groq.com/)\\n\\n## Set Up Your Local Environment\\n\\n1. Create a new directory for your project:\\n\\n   ```\\n   mkdir llm-open-connector\\n   cd llm-open-connector\\n   ```\\n\\n2. Create a virtual environment and activate it:\\n\\n   ```\\n   python -m venv venv\\n   source venv/bin/activate  # On Windows, use `venv\\\\Scripts\\\\activate`\\n   ```\\n\\n3. Download these files from the einstein-platform repository:\\n\\n   - [.gitignore](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-groq/.gitignore)\\n   - [app.py](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-groq/app.py)\\n   - [index.html](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-groq/index.html)\\n   - [Procfile](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-groq/Procfile)\\n   - [requirements.txt](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-groq/requirements.txt)\\n   - [runtime.txt](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-groq/runtime.txt)\\n\\n4. Copy the downloaded files into your project directory.\\n\\n5. Install the required packages:\\n   ```\\n   pip install -r requirements.txt\\n   ```\\n\\n## Configure Your Local Environment\\n\\n1. For local testing, create a `.env` file in your project directory and add your Groq API key:\\n\\n   ```\\n   GROQ_API_KEY=your_groq_api_key_here\\n   ```\\n\\n   Replace `your_groq_api_key_here` with your actual Groq API key.\\n\\n2. Make sure your `.gitignore` file includes the `.env` file to avoid accidentally committing sensitive information.\\n\\n## Test Your Application Locally\\n\\n1. Run your Flask application:\\n\\n   ```\\n   python app.py\\n   ```\\n\\n2. Your app should now be running on `http://127.0.0.1:5000/`.\\n\\n3. Test the endpoints using a tool like cURL or Postman to ensure they\'re working correctly.\\n\\nTo test the `chat/completions` endpoint, run this cURL command:\\n\\n```bash\\ncurl -X POST http://127.0.0.1:5000/chat/completions \\\\\\n-H \\"Content-Type: application/json\\" \\\\\\n-d \'{\\n  \\"model\\": \\"llama3-8b-8192\\",\\n  \\"messages\\": [\\n    {\\"role\\": \\"system\\", \\"content\\": \\"You are a helpful assistant.\\"},\\n    {\\"role\\": \\"user\\", \\"content\\": \\"What is the capital of Canada?\\"}\\n  ],\\n  \\"max_tokens\\": 50,\\n  \\"temperature\\": 0.7,\\n  \\"n\\": 1\\n}\'\\n```\\n\\n## Prepare for Heroku Deployment\\n\\n1. Initialize a Git repository in your project directory:\\n\\n   ```\\n   git init\\n   ```\\n\\n2. Add your files to the repository:\\n\\n   ```\\n   git add .\\n   ```\\n\\n3. Commit your changes:\\n   ```\\n   git commit -m \\"Initial commit\\"\\n   ```\\n\\n## Update Your Default Branch\\n\\nTo switch the default branch used to deploy apps from `master` to `main`, follow these steps:\\n\\n1. Create a new branch locally:\\n\\n   ```bash\\n   git checkout -b main\\n   ```\\n\\n2. Delete the old default branch locally:\\n\\n   ```bash\\n   git branch -D master\\n   ```\\n\\n   Now, the local environment only knows about the `main` branch.\\n\\n3. Reset the git repository on the Heroku Platform:\\n\\n   - Use the `heroku-reset` command from the `heroku-repo` CLI plugin.\\n   - This will not impact the running application.\\n\\n   **Note:** Communicate this change with your team. If other developers are unaware of the reset, they might push to `master`, overwriting the reset.\\n\\n4. To switch the default branch in GitHub, refer to this article: [Setting the Default Branch](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch).\\n\\n## Deploy to Heroku\\n\\n1. Make sure you\'re logged in to the Heroku CLI:\\n\\n   ```\\n   heroku login\\n   ```\\n\\n2. Create a new Heroku app:\\n\\n   ```\\n   heroku create your-app-name\\n   ```\\n\\n   Replace `your-app-name` with a unique name for your application.\\n\\n3. Set the GROQ_API_KEY config var on Heroku:\\n\\n   ```\\n   heroku config:set GROQ_API_KEY=your_groq_api_key_here -a your-app-name\\n   ```\\n\\n   Replace `your_groq_api_key_here` with your actual Groq API key.\\n\\n4. Deploy your app to Heroku:\\n\\n   ```\\n   git push heroku main\\n   ```\\n\\n5. Open your deployed app:\\n   ```\\n   heroku open\\n   ```\\n\\nYour LLM Open Connector should now be deployed and accessible via the Heroku URL.\\n\\n## Test Your Deployed Application\\n\\nYou can test your deployed application in two ways:\\n\\n1. Using the example UI:\\n\\n   - Open your browser and navigate to `https://your-app-name.herokuapp.com`\\n   - You\'ll see a simple interface where you can input prompts and get responses from the LLM\\n   - Try different prompts and get super fast responses!\\n\\n2. Using API endpoints:\\n   Use a tool like cURL or Postman to test the endpoints of your Flask app:\\n   - Chat Completions: `POST https://your-app-name.herokuapp.com/chat/completions`\\n\\n## Conclusion\\n\\nYou have successfully created and deployed an LLM Open Connector using the Groq API and deployed it to Heroku! This connector adheres to the Salesforce LLM Open Connector API specification, allowing for seamless integration with the Einstein AI Platform using the BYOLLM feature.\\n\\nWith this connector, you can bring new foundation models like Llama 3 into Einstein Studio that take advantage of Groq\'s fast inference platform.\\n\\nRemember to monitor your usage and costs associated with the Groq API, and consider implementing additional security measures, such as rate limiting, CORS restrictions, and user authentication, before using this connector in a production environment."},{"id":"sambanova","metadata":{"permalink":"/einstein-platform/sambanova","source":"@site/cookbook/llm-open-connector-sambanova.md","title":"LLM Open Connector + SambaNova","description":"Learn how to implement Salesforce\'s LLM Open Connector with the SambaNova platform for fast AI inference. We also cover how to deploy the connector as a Flask app on Heroku with a simple web UI for testing.","date":"2024-09-15T00:00:00.000Z","tags":[{"inline":false,"label":"heroku","permalink":"/einstein-platform/tags/heroku"},{"inline":false,"label":"llm-open-connector","permalink":"/einstein-platform/tags/llm-open-connector"},{"inline":false,"label":"sambanova","permalink":"/einstein-platform/tags/sambanova"}],"readingTime":3.73,"hasTruncateMarker":true,"authors":[{"name":"Richard","title":"Technical Writer @ Salesforce","url":"https://github.com/rsexton404","page":{"permalink":"/einstein-platform/authors/rsexton"},"socials":{"github":"https://github.com/rsexton404"},"imageURL":"https://github.com/rsexton404.png","key":"rsexton"}],"frontMatter":{"slug":"sambanova","authors":["rsexton"],"tags":["heroku","llm-open-connector","sambanova"],"date":"2024-09-15T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"LLM Open Connector + Groq","permalink":"/einstein-platform/groq"},"nextItem":{"title":"LLM Open Connector + watsonx","permalink":"/einstein-platform/ibm"}},"content":"Learn how to implement Salesforce\'s [LLM Open Connector](/docs/apis/llm-open-connector/) with the [SambaNova](https://sambanova.ai/) platform for fast AI inference. We also cover how to deploy the connector as a Flask app on Heroku with a simple web UI for testing.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Prerequisites\\n\\nBefore you begin, make sure that your local environment meets these prerequisites.\\n\\n1. Python 3.9 or later installed on your local machine\\n2. A Heroku account (sign up at https://signup.heroku.com/)\\n3. Heroku CLI installed (https://devcenter.heroku.com/articles/heroku-cli)\\n4. Git installed on your local machine\\n5. A SambaNova API key (sign up at https://sambanova.ai/)\\n\\n## Set Up Your Local Environment\\n\\n1. Create a new directory for your project:\\n\\n   ```\\n   mkdir llm-open-connector\\n   cd llm-open-connector\\n   ```\\n\\n2. Create a virtual environment and activate it:\\n\\n   ```\\n   python -m venv venv\\n   source venv/bin/activate  # On Windows, use `venv\\\\Scripts\\\\activate`\\n   ```\\n\\n3. Download these files from the einstein-platform repository:\\n\\n   - [.gitignore](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-sambanova/.gitignore)\\n   - [app.py](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-sambanova/app.py)\\n   - [index.html](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-sambanova/index.html)\\n   - [Procfile](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-sambanova/Procfile)\\n   - [requirements.txt](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-sambanova/requirements.txt)\\n   - [runtime.txt](https://github.com/salesforce/einstein-platform/tree/main/documentation/cookbook-assets/llm-open-connector-sambanova/runtime.txt)\\n\\n4. Copy the downloaded files into your project directory.\\n\\n5. Install the required packages:\\n   ```\\n   pip install -r requirements.txt\\n   ```\\n\\n## Configure Your Local Environment\\n\\n1. For local testing, create a `.env` file in your project directory and add your API key:\\n\\n   ```\\n   API_KEY=your_api_key_here\\n   ```\\n\\n   Replace `your_api_key_here` with your actual API key.\\n\\n2. Make sure your `.gitignore` file includes the `.env` file to avoid accidentally committing sensitive information.\\n\\n## Test Your Application Locally\\n\\n1. Run your Flask application:\\n\\n   ```\\n   python app.py\\n   ```\\n\\n2. Your app should now be running on `http://127.0.0.1:5000/`.\\n\\n3. Test the endpoints using a tool like cURL or Postman to ensure they\'re working correctly.\\n\\nTo test the `chat/completions` endpoint, run this cURL command:\\n\\n```bash\\ncurl -X POST http://127.0.0.1:5000/chat/completions \\\\\\n-H \\"Content-Type: application/json\\" \\\\\\n-d \'{\\n  \\"model\\": \\"Meta-Llama-3.1-8B-Instruct\\",\\n  \\"messages\\": [\\n    {\\"role\\": \\"system\\", \\"content\\": \\"You are a helpful assistant.\\"},\\n    {\\"role\\": \\"user\\", \\"content\\": \\"What is the capital of Canada?\\"}\\n  ],\\n  \\"temperature\\": 0.7,\\n}\'\\n```\\n\\n## Prepare for Heroku Deployment\\n\\n1. Initialize a Git repository in your project directory:\\n\\n   ```\\n   git init\\n   ```\\n\\n2. Add your files to the repository:\\n\\n   ```\\n   git add .\\n   ```\\n\\n3. Commit your changes:\\n   ```\\n   git commit -m \\"Initial commit\\"\\n   ```\\n\\n## Update Your Default Branch\\n\\nTo switch the default branch used to deploy apps from `master` to `main`, follow these steps:\\n\\n1. Create a new branch locally:\\n\\n   ```bash\\n   git checkout -b main\\n   ```\\n\\n2. Delete the old default branch locally:\\n\\n   ```bash\\n   git branch -D master\\n   ```\\n\\n   Now, the local environment only knows about the `main` branch.\\n\\n3. Reset the git repository on the Heroku Platform:\\n\\n   - Use the `heroku-reset` command from the `heroku-repo` CLI plugin.\\n   - This will not impact the running application.\\n\\n   **Note:** Communicate this change with your team. If other developers are unaware of the reset, they might push to `master`, overwriting the reset.\\n\\n4. To switch the default branch in GitHub, refer to this article: [Setting the Default Branch](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch).\\n\\n## Deploy to Heroku\\n\\n1. Make sure you\'re logged in to the Heroku CLI:\\n\\n   ```\\n   heroku login\\n   ```\\n\\n2. Create a new Heroku app:\\n\\n   ```\\n   heroku create your-app-name\\n   ```\\n\\n   Replace `your-app-name` with a unique name for your application.\\n\\n3. Set the API_KEY config var on Heroku:\\n\\n   ```\\n   heroku config:set API_KEY=your_api_key_here -a your-app-name\\n   ```\\n\\n   Replace `your_api_key_here` with your actual API key.\\n\\n4. Deploy your app to Heroku:\\n\\n   ```\\n   git push heroku main\\n   ```\\n\\n5. Open your deployed app:\\n   ```\\n   heroku open\\n   ```\\n\\nYour LLM Open Connector should now be deployed and accessible via the Heroku URL.\\n\\n## Test Your Deployed Application\\n\\nYou can test your deployed application in two ways:\\n\\n1. Using the example UI:\\n\\n   - Open your browser and navigate to `https://your-app-name.herokuapp.com`\\n   - You\'ll see a simple interface where you can input prompts and get responses from the LLM\\n   - Try different prompts and get super fast responses!\\n\\n2. Using API endpoints:\\n   Use a tool like cURL or Postman to test the endpoints of your Flask app:\\n\\n   - Chat Completions: `POST https://your-app-name.herokuapp.com/chat/completions`\\n\\n## Conclusion\\n\\nYou have successfully created and deployed an LLM Open Connector using the SambaNova API and deployed it to Heroku! This connector adheres to the Salesforce LLM Open Connector API specification, allowing for seamless integration with the Einstein AI Platform using the BYOLLM feature.\\n\\nWith this connector, you can bring new foundation models like Llama 3 into Einstein Studio that take advantage of SambaNova\'s fast inference platform.\\n\\nRemember to monitor your usage and costs associated with the SambaNova API, and consider implementing additional security measures, such as rate limiting, CORS restrictions, and user authentication, before using this connector in a production environment."},{"id":"ibm","metadata":{"permalink":"/einstein-platform/ibm","source":"@site/cookbook/llm-open-connector-ibm.md","title":"LLM Open Connector + watsonx","description":"Learn how to implement Salesforce\'s LLM Open Connector with the IBM watsonx platform.","date":"2024-10-18T00:00:00.000Z","tags":[{"inline":false,"label":"ibm","permalink":"/einstein-platform/tags/ibm"},{"inline":false,"label":"llm-open-connector","permalink":"/einstein-platform/tags/llm-open-connector"}],"readingTime":3.175,"hasTruncateMarker":true,"authors":[{"name":"Tate","title":"Technical Writer @ Salesforce","url":"https://github.com/tatedorman","page":{"permalink":"/einstein-platform/authors/tatedorman"},"socials":{"github":"https://github.com/tatedorman"},"imageURL":"https://github.com/tatedorman.png","key":"tatedorman"}],"frontMatter":{"slug":"ibm","authors":["tatedorman"],"tags":["ibm","llm-open-connector"],"date":"2024-10-18T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"LLM Open Connector + SambaNova","permalink":"/einstein-platform/sambanova"}},"content":"Learn how to implement Salesforce\'s [LLM Open Connector](/docs/apis/llm-open-connector/) with the IBM watsonx platform.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Prerequisites\\n\\n- A Salesforce org with Einstein Generative AI and Data Cloud enabled.\\n- A Salesforce Einstein Studio Environment.\\n\\n## Step 1\\\\. Create Your watsonx Instance\\n\\n**Create an account.**\\n\\n1. If you don\u2019t already have one, [create a watsonx trial account](https://dataplatform.cloud.ibm.com/registration/stepone?context=wx). \\n\\n   If you have an existing, non-trial watsonx account, you\u2019ll need to follow these additional steps: \\n\\n    1. In IBM Cloud, [set up IBM Cloud Object Storage for use with IBM watsonx](https://dataplatform.cloud.ibm.com/docs/content/wsj/console/wdp_admin_cos.html?context=wx&audience=wdp).   \\n    2. [Set up the Watson Studio and Watson Machine Learning](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/set-up-ws.html?context=wx&audience=wdp) services.   \\n    3. Create a new project from the [IBM watsonx console](https://dataplatform.cloud.ibm.com/projects/?context=wx).\\n\\n**Find your Project ID value.**\\n\\n1. In your sandbox, click on the **Manage** tab and copy your Project ID value.   \\n2. Store the project-id value. You\u2019ll need this value along with an API key and a region-id in step three.\\n\\n**Create an IBM Cloud API Key.**\\n\\n1. In the IBM Cloud console, go to **Manage** \\\\> **Access (IAM)**.  \\n2. In the sidebar, select **API Keys**.  \\n3. Click **Create**.  \\n4. Enter a name and description for your API key.  \\n5. Then, click **Create**.  \\n6. Store your API key in a safe location. \\n\\n**Get the region value for the watsonx instance.**\\n\\n1. From the watsonx home page, check the region in the header bar. \\n\\n![IBM region id value](/img/ibm-region-id.png)\\n\\n2. Store the region-id value.\\n\\n## Step 2\\\\. Verify Your Open Connector Implementation (Optional)\\n\\nIBM automatically provides a working implementation of the Open Connector for watsonx that you can use to test this workflow. If you want to create your own implementation for production use cases, follow these steps. Otherwise, skip to step three.\\n\\n1. Create your own connector implementation for watsonx. For directions and code, see [IBM\'s watsonx connector repo](https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code).\\n\\n## Step 3\\\\. Create a BYOLLM Connection to the watsonx Model in Einstein Studio\\n\\nBefore you connect your Open Connector implementation to Einstein Studio, you\u2019ll need three pieces of information from Step 1: project-id, API key, and region-id.\\n\\n1. Log into your Salesforce org as an admin user and open Einstein Studio.  \\n2. Click **Model Library**.  \\n3. Click **Add Foundation Model**. \\n\\n![Add a Foundation Model](/img/ibm-model-library.png)\\n\\n4. In Model Builder, click **Connect to your LLM**.\\n\\n![Connect to your LLM](/img/ibm-model-builder.png)\\n\\n5. Click **Next**.  \\n6. Enter the details of your watsonx instance.   \\n   * Name: IBM Granite (or your own preferred name)  \\n   * URL:  if you are using the connector hosted by IBM, get the URL from [IBM\'s watsonx connector repo](https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code). Otherwise, use the URL from the connector instance that you have created from the code and documentation in [the watsonx repo](https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code). When filling out the URL value, be sure to use the project-id and region-id that you copied from step 1\\\\.  \\n   * Authentication: Key Based  \\n   * Auth Header: X-IBM-API-KEY  \\n   * Key: \\\\[your IBM API key\\\\]  \\n   * Model Name/ID:  ibm/granite-13b-chat-v2 (Or the specific model ID you want to connect to, refer to watsonx model IDs from your IBM watsonx console.)  \\n   * Token Limit: 8,192 (Or the specified model\'s maximum context length. Refer to the watsonx model IDs from you IBM watsonx console.)\\n\\n![Example IBM Granite connection](/img/ibm-granite-connection.png)\\n\\n7. Click **Connect**.\\n8. Click **Name and Connect**.\\n\\n## Step 4\\\\. Create a Configured Model\\n\\nBefore you can use your connected LLM, you need to create a configured model.\\n\\n1. In the Model Library in Einstein Studio, select **Configure Foundation Model**.  \\n2. Select **Create Model**.  \\n3. Choose your connected LLM from the \u201cFoundation Model\u201d dropdown.   \\n4. Configure the model parameters.  \\n5. Test the model performance in the model playground.\\n\\nYou can now use your LLM wherever you can use Einstein Studio generative models. For instance, you can build prompt templates using [Prompt Builder](https://www.google.com/url?q=https://help.salesforce.com/s/articleView?id%3Dsf.prompt_builder_about.htm&sa=D&source=docs&ust=1729008016102516&usg=AOvVaw29nKsztGMWSoa59DEIFXZJ). \\n\\n## See Also\\n\\n* [*External:* IBM watsonx Repo](https://ibm.biz/eebl-salesforce-watsonx-apic-connector-code)   \\n* [*Interactive Demo:* Use watsonx AI models from Salesforce](https://dsce.ibm.com/wizard/watsonx/results/watsonx-use-watsonx-ai-models-from-salesforce#)  \\n* [*Salesforce Help:* Add a Foundation Model](https://help.salesforce.com/s/articleView?id=sf.c360_a_ai_foundation_models_create.htm&type=5)"}]}}')}}]);