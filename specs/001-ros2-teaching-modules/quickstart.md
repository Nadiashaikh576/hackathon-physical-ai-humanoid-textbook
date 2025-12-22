# Quickstart Guide: ROS 2 Teaching Modules

## Prerequisites

Before starting with the ROS 2 Teaching Modules, ensure you have the following:

- Basic Python knowledge (Python 3.8 or higher)
- Familiarity with command-line interfaces
- Git installed on your system
- Node.js 18+ and npm (for Docusaurus documentation)

## Setup Environment

### 1. Install ROS 2

Follow the official ROS 2 installation guide for your operating system:
- [ROS 2 Installation Guide](https://docs.ros.org/en/humble/Installation.html)

For this course, we recommend installing the **Desktop Install** which includes development tools.

### 2. Set up the workspace

```bash
# Create a workspace directory
mkdir -p ~/ros2_workspace/src
cd ~/ros2_workspace

# Source the ROS 2 environment
source /opt/ros/humble/setup.bash  # On Linux
# Or add to your .bashrc/.zshrc to make it permanent
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

### 3. Install Docusaurus for documentation

```bash
# Install Node.js dependencies
npm install

# Start the documentation site locally
npm start
```

## Getting Started with the Modules

The course is organized into 3 chapters:

1. **Chapter 1: ROS 2 Fundamentals** - Understanding ROS 2 concepts and its role as a distributed robot nervous system
2. **Chapter 2: ROS 2 Communication** - Learning about nodes, topics, and services
3. **Chapter 3: AI-to-Robot Bridge** - Implementing Python agents using rclpy

## First Steps

1. Start with Chapter 1 to understand the fundamentals of ROS 2
2. Follow along with the examples in each chapter
3. Complete the exercises at the end of each chapter
4. Use the ROS 2 tutorials and documentation for additional reference

## Running Examples

Most examples in the modules can be run using:

```bash
# Source ROS 2 environment
source /opt/ros/humble/setup.bash

# Navigate to your workspace
cd ~/ros2_workspace

# Build the workspace
colcon build

# Source the workspace
source install/setup.bash

# Run the example
ros2 run <package_name> <executable_name>
```

## Getting Help

- Refer to the [official ROS 2 documentation](https://docs.ros.org/en/humble/)
- Use the ROS 2 community forums
- Check the exercises solutions if you get stuck
- Join the ROS discourse for community support