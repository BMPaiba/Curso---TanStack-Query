import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers/sleep";
import { GithubIssues } from "../interfaces/issues.interface";

export const getIssueByNumber = async (issueNumber: number): Promise<GithubIssues> => {
  await sleep(1500);
  const { data } = await githubApi.get<GithubIssues>(`/issues/${issueNumber}`);
  console.log("esta es la peticion que estoy buscando");
  return data;
};
