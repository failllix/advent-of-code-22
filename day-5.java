import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Stack;
import java.nio.file.*;

class dayFive {

    public static String readFileAsString(String fileName)
    {
        try{
            String data = "";
            data = new String(
                Files.readAllBytes(Paths.get(fileName)));
            return data;
        } catch(Exception exception){
            System.out.println("Error while reading file:");
            System.out.println(exception);
            System.exit(0);
        }
        return null;
    }

    public static void main(String[] args) {

        final var in = readFileAsString("./day-5.txt");

        final var splittedInput = in.split("\n\n");
        final var stackInput = splittedInput[0];
        final var movesInput = splittedInput[1];

        final var stacks = getStacksFromInputString(stackInput);
    }   


    private static List<Stack<String>> getStacksFromInputString(final String iString){
        final List<Stack<String>> stacks = Collections.emptyList();

        final var rows = iString.split("\n");
        System.out.println(rows[rows.length - 1]);

        return stacks;
    }

}
