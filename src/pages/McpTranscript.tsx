import mctsImage from "../assets/mcts_all_dotNet2.png";

export default function McpTranscript() {
  return (
    <>
      <h3>
        <a id="my-mcp-transcript" href="#my-mcp-transcript">
          My MCP Transcript
        </a>
      </h3>

      <div className="center">
        <img
          src={mctsImage}
          alt="Microsoft Certified Technology Specialist: .NET 2.0 Web, Distributed, &amp; Windows Applications"
        />
      </div>

      <h4>Credentials</h4>
      <ul>
        <li>
          <strong>Transcript ID:</strong> 827527
        </li>
        <li>
          <strong>Access Code:</strong> JamesGreeneMCP
        </li>
      </ul>

      <iframe
        id="mcpframe"
        src="https://mcp.microsoft.com/authenticate/validatemcp.aspx"
        title="MCP Transcript Validation"
      >
        <p>Please use the above credentials on the following site:</p>
        <a
          className="external"
          href="https://mcp.microsoft.com/authenticate/validatemcp.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mcp.microsoft.com/authenticate/validatemcp.aspx
        </a>
      </iframe>
    </>
  );
}
