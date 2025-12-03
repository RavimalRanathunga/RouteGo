import from byllm.lib{Model}
glob llm = Model(model_name="gemini/gemini-2.0-flash");

obj City_details{
    has start_city: str;
    has end_city: str;
}

obj Time_details{
    has start_time:str;
    has end_time:str;
}

sem City_details.start_city = "Analyze the user input to find the starting city of the bus route. If the starting city is not provided, leave it empty.";

sem City_details.end_city = "Analyze the user input to find the ending city of the bus route. If the ending city is not provided, leave it empty.";

sem Time_details.start_time = "Analyze the user input to find the starting time of time range. If the starting time is not provided, leave it empty.";

sem Time_details.end_time = "Analyze the user input to find the ending time of time range. If the ending time is not provided, leave it empty.";

"""
Extracts starting and ending city information from user input text.

This function uses an LLM to parse natural language input and identify
the departure and destination cities for a bus route. It returns a
City_details object containing the extracted city names.

Args:
    user_input (str): Natural language text containing route information

Returns:
    City_details: Object with start_city and end_city fields. Fields will
                 be empty strings if cities are not found in the input.

Example:
    >>> extract_city_details("I want to go from Colombo to Kandy")
    City_details(start_city="Colombo", end_city="Kandy")
"""
def extract_city_details(user_input: str) -> City_details  by llm();

"""
Extracts time range information from user input text for bus schedule filtering.

This function uses an LLM to parse natural language input and identify
time constraints such as departure time ranges, arrival time preferences,
or travel time windows. It returns a Time_details object containing the
extracted time information in string format.

Args:
    user_input (str): Natural language text containing time-related information
                     such as "between 8 AM and 10 AM", "after 2 PM", "morning buses",
                     "departure before 6:00", or specific time ranges.

Returns:
    Time_details: Object with start_time and end_time fields in string format.
                 Fields will be empty strings if time information is not found
                 in the input. Time format should be consistent (e.g., "HH:MM").

Examples:
    >>> extract_time_details("I need a bus between 8 AM and 10 AM")
    Time_details(start_time="08:00", end_time="10:00")
    
    >>> extract_time_details("Show me morning buses from 6 to 9")
    Time_details(start_time="06:00", end_time="09:00")
    
    >>> extract_time_details("Buses after 2 PM")
    Time_details(start_time="14:00", end_time="")
    
    >>> extract_time_details("Find me a bus to Kandy")
    Time_details(start_time="", end_time="")

Note:
    The function interprets various time formats and natural language expressions
    like "morning", "afternoon", "evening" and converts them to 24-hour format.
    If only one time boundary is specified, the other field will remain empty.
"""
def extract_time_details(user_input: str) -> Time_details by llm();