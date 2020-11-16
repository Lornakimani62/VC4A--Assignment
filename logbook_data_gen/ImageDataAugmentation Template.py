from keras.preprocessing.image import ImageDataGenerator, array_to_img, img_to_array, load_img

datagen = ImageDataGenerator(
featurewise_center=True,
                     featurewise_std_normalization=True,
                     rotation_range=90,
                     width_shift_range=0.2,
                     height_shift_range=0.2,)

img = load_img(r'C:\Users\Spectre\Documents\lorna_wazinsure_projects\logbook_data_gen\unprocessed _images\011.jpg')  # this is a PIL image 

x = img_to_array(img)  # this is a Numpy array with shape (3, 150, 150)
x = x.reshape((1,) + x.shape)  # this is a Numpy array with shape (1, 3, 150, 150)

# the .flow() command below generates batches of randomly transformed images
# and saves the results to the `preview/` directory
i = 0
for batch in datagen.flow(x, batch_size=1,
                          save_to_dir=r'C:\Users\Spectre\Documents\lorna_wazinsure_projects\logbook_data_gen\processed_images', save_prefix='processed_image', save_format='jpg'):
    i += 1
    if i > 10:
        break  # otherwise the generator would loop indefinitely

