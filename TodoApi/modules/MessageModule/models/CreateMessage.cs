namespace TodoApi.modules.MessageModule.models
{
    public class CreateMessage
    {
        public int? Id { get; set; }

        public string? Title { get; set; }
        public string? Body { get; set; }
    }
}