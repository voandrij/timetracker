using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proxy.Models {
    public class ExtranetTasksList {
        public class ResolvedValues {
            public string update_account_id { get; set; }
            public string keeper_id { get; set; }
            public string priority { get; set; }
            public string state { get; set; }
            public string accountable_account_id { get; set; }
            public string created_by_account_id { get; set; }
            public string ticket_type { get; set; }
        }

        public class LinkLists {
        }

        public class PeopleLists {
        }

        public class Datum {
            public ResolvedValues resolved_values { get; set; }
            public int comment { get; set; }
            public string id { get; set; }
            public string project_alias { get; set; }
            public int is_read { get; set; }
            public DateTime real_update_date { get; set; }
            public int? amount_of_comments { get; set; }
            public object checksum { get; set; }
            public string followers_list { get; set; }
            public string created_by_account_id { get; set; }
            public string publishing_alias { get; set; }
            public string state_before_cancel { get; set; }
            public string ui_origin { get; set; }
            public string project_title { get; set; }
            public string update_account_id { get; set; }
            public object start_on { get; set; }
            public bool minor_change { get; set; }
            public object parent_id { get; set; }
            public LinkLists __link_lists { get; set; }
            public int absolute_pos { get; set; }
            public object record_links { get; set; }
            public int total_real_of_subtasks { get; set; }
            public object folder_id { get; set; }
            public object copied_from_id { get; set; }
            public string size { get; set; }
            public object due_date { get; set; }
            public string transition { get; set; }
            public string ticket_type { get; set; }
            public int number { get; set; }
            public int total_remaining_of_subtasks { get; set; }
            public PeopleLists __people_lists { get; set; }
            public string global_acl_id { get; set; }
            public string project_id { get; set; }
            public string c_current_assignee_id { get; set; }
            public string accountable_account_id { get; set; }
            public string state { get; set; }
            public int duration { get; set; }
            public int grand_total_cost { get; set; }
            public int total_estimate_of_subtasks { get; set; }
            public int c_percent_complete { get; set; }
            public int description { get; set; }
            public double grand_total_estimate { get; set; }
            public double total_real { get; set; }
            public string assignees_group { get; set; }
            public int budget { get; set; }
            public int flid { get; set; }
            public DateTime creation_date { get; set; }
            public object assignees_list { get; set; }
            public int __children_count { get; set; }
            public string title { get; set; }
            public int percent_complete { get; set; }
            public object attachments { get; set; }
            public int grand_total_remaining { get; set; }
            public object complexity { get; set; }
            public object company_id { get; set; }
            public object part_of_id { get; set; }
            public object finish_on { get; set; }
            public object binary_data { get; set; }
            public int total_remaining { get; set; }
            public int total_cost_of_subtasks { get; set; }
            public DateTime update_date { get; set; }
            public string allParents { get; set; }
            public int total_cost { get; set; }
            public bool updated_by_daemon { get; set; }
            public string keeper_id { get; set; }
            public double grand_total_real { get; set; }
            public string publishing_title { get; set; }
            public object tag_list_id { get; set; }
            public object reply_to_version_id { get; set; }
            public string process_template_id { get; set; }
            public string priority { get; set; }
        }

        public class RootObject {
            public string status { get; set; }
            public List<Datum> data { get; set; }
            public bool isPartialLoad { get; set; }
        }
    }
}