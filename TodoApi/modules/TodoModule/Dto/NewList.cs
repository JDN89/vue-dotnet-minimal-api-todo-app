namespace TodoApi.modules.TodoModule.Dto
{
    public class NewList
    {
        public int ListID { get; set; }
        public string? Title { get; set; }
        public String[]? Todos { get; set; }
        public String[]? Archived { get; set; }
    }
}