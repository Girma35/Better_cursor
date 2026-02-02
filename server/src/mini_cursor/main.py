import importlib.metadata 

version = importlib.metadata.version("mini-cursor")

def main():
    print("Hello from mini-cursor!")
    print("Version: ", version)


if __name__ == "__main__":
    main()
