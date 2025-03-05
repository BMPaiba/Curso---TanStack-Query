import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../issues/actions/get-issues.action";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: getIssues,
  }); 
  const commentQuery = useQuery({
    queryKey: ["issues", issueNumber, 'comments'],
    queryFn: getIssuesByComment(issueNumber),
  }); 

  return {
    issueQuery, commentQuery
  };
};
